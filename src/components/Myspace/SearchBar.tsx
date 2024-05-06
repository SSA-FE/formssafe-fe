import { SearchIcon } from '@/assets/icons';
import { updateKeyword } from '@components/Myspace/toolbar/toolbarInputSlice';
import { useState } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';

interface SearchBarProps {
  placeholder: string;
  bgColor: string;
  width: string;
  height: string;
}

const SearchBar = ({ placeholder, bgColor, width, height }: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState('');

  const handleOnclick = () => {
    dispatch(updateKeyword({ keyword }));
    setKeyword('');
  };

  return (
    <div
      className={`box-content  flex items-center justify-between pr-4 pl-6 border border-neutral-200 rounded-[1.125rem] gap-md ${bgColor} ${height} ${width}`}
    >
      <input
        type="text"
        className={`font-bold bg-transparent outline-none text-neutral-400 placeholder-neutral-400 caret-neutral-400 text-sm w-full`}
        placeholder={placeholder}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleOnclick();
          }
        }}
      />
      <button onClick={handleOnclick}>
        <SearchIcon width="20" height="20" />
      </button>
    </div>
  );
};

export default SearchBar;
