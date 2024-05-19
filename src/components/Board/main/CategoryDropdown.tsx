import { CategoryListIcon } from '@/assets/icons';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setCategory } from '@components/Board/boardViewSlice';

interface CategoryDropdownProps {
  isOpen: boolean;
  handleDropdown: () => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  isOpen,
  handleDropdown,
}) => {
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const categoryList = [
    '커피/음료',
    '상품권',
    '편의점',
    '치킨/피자/햄버거',
    '기타',
  ];
  const [, setSelectedCategory] = useState(categoryList[0]);

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

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    dispatch(setCategory(category));
    handleDropdown();
  };

  return (
    <button
      ref={dropdownRef}
      className={`flex flex-col border rounded-[20px] ${isOpen ? 'bg-slate-100' : 'hover:bg-slate-50'}   border-slate-200`}
      onClick={handleDropdown}
    >
      <div className="px-6 space-x-4 w-[160px] h-full">
        <div className="flex items-center justify-center w-full h-10">
          <div className="flex items-center h-full space-x-3">
            <CategoryListIcon width={20} height={20} fill="#64748b" />
            <p className="text-sm font-bold text-slate-500">카테고리</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="relative top-0 z-10 mt-1 bg-white rounded-lg shadow w-[160px] border border-slate-200">
          <ul className="py-2 text-sm text-slate-400">
            {categoryList.map((category) => (
              <li key={category}>
                <div
                  onClick={() => handleSelectCategory(category)}
                  className="flex items-center justify-center w-full py-2 hover:bg-slate-400 hover:text-slate-50"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleSelectCategory(category);
                    }
                  }}
                >
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default CategoryDropdown;
