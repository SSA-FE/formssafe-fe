import searchIcon from '@/assets/icons/search-icon.svg';
import { updateKeyword } from '@components/Myspace/toolbar/toolbarInputSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface SearchBarProps {
  placeholder: string;
  bgColor: string;
  width: string;
  height: string;
}

const SearchBar = ({ placeholder, bgColor, width, height }: SearchBarProps) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleOnclick = () => {
    dispatch(updateKeyword({ keyword }));
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
      />
      <button onClick={handleOnclick}>
        <img src={searchIcon} alt="검색 아이콘" />
      </button>
    </div>
  );
};

export default SearchBar;
