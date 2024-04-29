import { CategoryListIcon } from '@/assets/icons';
import { useEffect, useRef, useState } from 'react';

interface CategoryDropdownProps {
  isOpen: boolean;
  handleDropdown: () => void;
}

const CategoryDropdown = ({
  isOpen,
  handleDropdown,
}: CategoryDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    handleDropdown();
  };

  return (
    <div
      ref={dropdownRef}
      className={`flex flex-col border rounded-[20px] ${isOpen ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}   border-gray-200 `}
    >
      <div className="px-6 space-x-4 w-[160px] h-full">
        <div className="flex items-center justify-center w-full h-10">
          <button
            className="flex items-center h-full space-x-3"
            onClick={handleDropdown}
          >
            <CategoryListIcon width={20} height={20} />
            <p className="text-sm font-bold text-gray-700">카테고리</p>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="relative top-0 z-10 mt-1 bg-white rounded-lg shadow w-[160px]">
          <ul className="py-2 text-sm text-neutral-400">
            {categoryList.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleSelectCategory(category)}
                  className="flex items-center w-full py-2 pl-6 pr-4 hover:bg-neutral-100"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
