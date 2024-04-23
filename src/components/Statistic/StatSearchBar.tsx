import searchIcon from '@/assets/icons/search-icon.svg';

interface SearchBarProps {
  placeholder: string;
  bgColor?: string;
  width?: string;
}

const StatSearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="flex items-center justify-center flex-1 drop-shadow-md">
      <div className="w-[32.5rem] py-2 pr-4 pl-6 flex items-center justify-between border rounded-full bg-slate-100 border-slate-200 text-slate-100">
        <input
          className="w-full text-xs font-bold bg-transparent text-slate-400 "
          type="text"
          placeholder={placeholder}
        />
        <button>
          <img className="ml-2" src={searchIcon} alt="검색 아이콘" />
        </button>
      </div>
    </div>
  );
};

export default StatSearchBar;
