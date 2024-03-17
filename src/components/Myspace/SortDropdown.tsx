import { useState, useRef, useEffect } from 'react';
import dropdownIcon from '@/assets/icons/dropdown-icon.svg';

const SortDropdown = () => {
  const options = ['최근에 수정된 순서', '많은 응답자순', '가까운 마감일자순'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    console.log(option, 'is clicked!');
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-neutral-300 text-content h-8 text-neutral-400 focus:outline-none rounded-lg pl-6 pr-4 text-center flex items-center font-bold w-[182px] justify-between"
        type="button"
      >
        {selectedOption}
        <img src={dropdownIcon} alt="드롭다운 아이콘" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow">
          <ul className="py-2 text-neutral-400 text-content">
            {options.map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className={`flex items-center pl-6 pr-4 w-full py-2 hover:bg-neutral-100 ${
                    selectedOption === option ? 'bg-neutral-100' : ''
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
