import searchIcon from '@/assets/icons/search-icon.svg';

interface SearchBarProps {
  placeholder: string;
  bgColor?: string;
  width?: string;
}

const StatSearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="flex items-center justify-center flex-1 drop-shadow-md">
      <div className="w-[520px] h-[30px] pr-4 pl-6 flex items-center justify-between border rounded-full bg-slate-100 border-slate-200 text-slate-100">
        <input
          className="text-xs font-bold bg-transparent text-slate-400 "
          type="text"
          placeholder={placeholder}
        />
        <button>
          <img src={searchIcon} alt="검색 아이콘" />
        </button>
      </div>
    </div>
  );
};

export default StatSearchBar;
