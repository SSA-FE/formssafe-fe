import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import StatusDropdown from './StatusDropdown';

const BoardToolbar = () => {
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
    <div className="flex items-center justify-between w-full  h-10 bg-white">
      <>Tags</>
      <div className="w-[350px] h-full flex justify-between">
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
