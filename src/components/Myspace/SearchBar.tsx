import searchIcon from '@/assets/icons/search-icon.svg';

interface SearchBarProps {
  placeholder: string;
  bgColor: string;
  width: string;
}

const SearchBar = ({ placeholder, bgColor, width }: SearchBarProps) => {
  return (
    <div
      className={`box-content flex items-center justify-between py-2 pr-4 pl-6 border border-neutral-200 rounded-[1.125rem] gap-lg ${bgColor} h-min`}
    >
      <input
        type="text"
        className={`font-bold bg-transparent outline-none h-[17px] text-neutral-400 placeholder-neutral-400 caret-neutral-400 text-sm ${width}`}
        placeholder={placeholder}
      />
      <button>
        <img src={searchIcon} alt="검색 아이콘" />
      </button>
    </div>
  );
};

export default SearchBar;
