import { useState, useRef, useEffect } from 'react';
import dropdownIcon from '@/assets/icons/dropdown-icon.svg';
import { updateSort } from './toolbar/toolbarInputSlice';
import { useAppDispatch } from '@hooks/useAppDispatch';

interface SortDropdownProps {
  bgColor: string;
  width: string;
  height: string;
}

const SortDropdown = ({ bgColor, width, height }: SortDropdownProps) => {
  const options = ['생성일순', '응답자순', '가까운 마감순'];
  const formOptionCodes: { [key: string]: string } = {
    생성일순: 'createdtime',
    응답자순: 'responseCnt',
    '가까운 마감순': 'endTime',
  };
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    dispatch(updateSort({ sort: formOptionCodes[option] }));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`box-content  flex items-center justify-between pr-4 pl-6 border border-neutral-200 rounded-[1.125rem] gap-md ${bgColor} ${height} ${width}`}
      ref={dropdownRef}
    >
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-sm h-8 text-neutral-400 focus:outline-none rounded-lg text-center flex items-center font-bold w-[182px] justify-between"
          type="button"
        >
          {selectedOption}
          <img src={dropdownIcon} alt="드롭다운 아이콘" />
        </button>

        {isOpen && (
          <div
            className={`absolute z-10 ${width} mt-1 bg-white rounded-lg shadow`}
          >
            <ul className="py-2 text-sm text-neutral-400">
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
    </div>
  );
};

export default SortDropdown;
