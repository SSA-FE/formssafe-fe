import { StatusIcon } from '@/assets/icons';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setStatus } from '@components/Board/boardViewSlice';
import { useEffect, useRef, useState } from 'react';

interface StatusDropdownProps {
  isOpen: boolean;
  handleDropdown: () => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  isOpen,
  handleDropdown,
}) => {
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const statusList = ['전체 설문', '진행중인 설문', '마감된 설문'];
  const formStatusCodes: { [key: string]: string } = {
    '전체 설문': '_all',
    '진행중인 설문': 'progress',
    '마감된 설문': 'done',
  };
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
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectStatus = (status: string) => {
    setSelectedOption(status);
    dispatch(setStatus(formStatusCodes[status]));
    handleDropdown();
  };

  return (
    <button
      ref={dropdownRef}
      className={`flex flex-col h-full border rounded-[20px] ${isOpen ? 'bg-slate-100' : 'hover:bg-slate-50'}   border-slate-200`}
      onClick={handleDropdown}
    >
      <div className="px-6 space-x-4 w-[160px] h-full">
        <div className="flex items-center justify-center w-full h-10">
          <div className="flex items-center h-full space-x-3">
            <StatusIcon width="25" height="25" />
            <p className="text-sm font-bold text-slate-500">설문상태</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="relative top-0 z-10 mt-1 bg-white rounded-lg shadow w-[160px] border border-slate-200">
          <ul className="py-2 text-sm text-slate-400">
            {statusList.map((status) => (
              <li key={status}>
                <div
                  onClick={() => handleSelectStatus(status)}
                  className="flex items-center justify-center w-full py-2 hover:bg-slate-400 hover:text-slate-50"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleSelectStatus(status);
                    }
                  }}
                >
                  {status}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default StatusDropdown;
