import { useState } from 'react';
import { setSort } from '@components/Board/boardViewSlice';
import CategoryDropdown from './CategoryDropdown';
import StatusDropdown from './StatusDropdown';
import { useAppDispatch } from '@hooks/useAppDispatch';

const BoardToolbar = () => {
  const [activeTap, setActiveTap] = useState('최근에 작성된 설문지');
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const dispatch = useAppDispatch();

  const tapList = ['최근에 작성된 설문지', '마감임박'];
  const formTapCodes: { [key: string]: string } = {
    '최근에 작성된 설문지': 'startDate',
    마감임박: 'endTime',
  };

  const handleTap = (tap: string) => {
    setActiveTap(tap);
    dispatch(setSort(formTapCodes[tap]));
  };

  const handleStatusDropdown = () => {
    setCategoryDropdownOpen(false);
    setStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const handleCategoryDropdown = () => {
    setStatusDropdownOpen(false);
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between w-full h-12 ">
      <div className="flex min-w-[480px] h-full space-x-4 font-bold bg-transparent border-none text-sm">
        {tapList.map((tap) => (
          <button
            key={tap}
            className={`px-6 py-3 ${activeTap === tap ? 'border-b-2 border-blue-300 text-slate-600' : 'text-slate-400 border-none'}`}
            onClick={() => handleTap(tap)}
          >
            {tap}
          </button>
        ))}
      </div>
      <div className="flex">
        <div className="w-[340px] h-10 flex justify-between mb-4">
          <StatusDropdown
            isOpen={isStatusDropdownOpen}
            handleDropdown={handleStatusDropdown}
          />
          <CategoryDropdown
            isOpen={isCategoryDropdownOpen}
            handleDropdown={handleCategoryDropdown}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardToolbar;
