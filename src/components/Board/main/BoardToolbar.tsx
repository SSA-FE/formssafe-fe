import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import StatusDropdown from './StatusDropdown';

const BoardToolbar = () => {
  const [activeTap, setActiveTap] = useState('최근에 작성된 설문지');
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

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
        <button
          className={`px-6 py-3  ${activeTap === '최근에 작성된 설문지' ? 'border-b-2 border-blue-300 text-slate-600' : 'text-slate-400 border-none'}`}
          onClick={() => {
            setActiveTap('최근에 작성된 설문지');
          }}
        >
          최근에 작성된 설문지
        </button>
        <button
          className={`px-6 py-2 ${activeTap === '인기있는 설문지' ? 'border-b-2  border-blue-300 text-slate-600' : 'text-slate-400 border-none'}`}
          onClick={() => {
            setActiveTap('인기있는 설문지');
          }}
        >
          인기있는 설문지
        </button>
        <button
          className={`px-6 py-2 ${activeTap === '마감임박' ? 'border-b-2  border-blue-300 text-slate-600' : 'text-slate-400 border-none'}`}
          onClick={() => {
            setActiveTap('마감임박');
          }}
        >
          마감임박
        </button>
      </div>
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
  );
};

export default BoardToolbar;
