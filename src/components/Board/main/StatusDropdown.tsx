import { StatusIcon } from '@/assets/icons';
import { useEffect, useRef, useState } from 'react';

interface StatusDropdownProps {
  isOpen: boolean;
  handleDropdown: () => void;
}

const StatusDropdown = ({ isOpen, handleDropdown }: StatusDropdownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const statusList = ['전체 설문', '진행중인 설문', '마감된 설문'];
  const [, setSelectedOption] = useState(statusList[0]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      handleDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectStatus = (status: string) => {
    setSelectedOption(status);
    handleDropdown();
  };

  return (
    <button
      onClick={handleDropdown}
      ref={dropdownRef}
      className={`flex flex-col border rounded-[20px] ${isOpen ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}   border-gray-200 `}
    >
      <div className="  px-6 space-x-4  w-[160px] h-full">
        <div className="flex items-center justify-center w-full h-10">
          <div className="flex items-center h-full space-x-3">
            <StatusIcon width="25" height="25" />
            <p className="text-sm font-bold text-gray-700">설문상태</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`relative top-0 z-10 mt-1 bg-white rounded-lg shadow w-[160px]`}
        >
          <ul className="py-2 text-sm text-neutral-400">
            {statusList.map((status) => (
              <li key={status}>
                <button
                  onClick={() => handleSelectStatus(status)}
                  className={`flex items-center pl-6 pr-4 w-full py-2 hover:bg-neutral-100`}
                >
                  {status}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default StatusDropdown;
