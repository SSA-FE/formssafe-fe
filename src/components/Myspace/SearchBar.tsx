import searchIcon from '@/assets/icons/search-icon.svg';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between h-full pl-6 pr-4 rounded-lg gap-md bg-neutral-300">
      <input
        type="text"
        className="font-bold bg-transparent outline-none h-[17px] text-neutral-400  placeholder-neutral-400 caret-neutral-400 text-content w-36"
        placeholder="프로젝트를 검색하세요"
      />
      <button>
        <img src={searchIcon} alt="검색 아이콘" />
      </button>
    </div>
  );
};

export default SearchBar;
