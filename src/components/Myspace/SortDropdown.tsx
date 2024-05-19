import { useState, useRef, useEffect } from 'react';
import { DropdownIcon } from '@/assets/icons';
import { updateSort } from './toolbar/toolbarInputSlice';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
interface SortDropdownProps {
  bgColor: string;
  width: string;
  height: string;
}

const SortDropdown = ({ bgColor, width, height }: SortDropdownProps) => {
  const { sort } = useSelector((state: RootState) => state.toolbarInput);
  const options = ['생성일순', '가까운 마감순'];
  const formOptionCodes: { [key: string]: string } = {
    생성일순: 'startDate',
    '가까운 마감순': 'endTime',
  };
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setSelectedOption(
      Object.keys(formOptionCodes).find(
        (key) => formOptionCodes[key] === sort
      ) as string
    );
  }, [sort]);

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
      className={`box-content  flex items-center justify-between border border-neutral-200 rounded-[1.125rem] gap-md ${bgColor} ${height} ${width}`}
      ref={dropdownRef}
    >
      <div className="relative w-full">
        <button
          onClick={toggleDropdown}
          className="flex items-center w-full h-8 text-xs font-bold rounded-lg justify-evenly text-slate-400 focus:outline-none"
          type="button"
        >
          <p className="text-center">{selectedOption}</p>
          <DropdownIcon width="10" />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow border-slate-200">
            <ul className="py-2 text-sm text-neutral-400">
              {options.map((option) => (
                <li key={option}>
                  <button
                    onClick={() => handleOptionClick(option)}
                    className={`flex items-center w-full py-2 hover:bg-slate-400 hover:text-slate-50  
                      
                    `}
                  >
                    <p className="w-full text-center">{option}</p>
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
