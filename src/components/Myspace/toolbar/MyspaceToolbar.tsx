import SearchBar from '@/components/Myspace/SearchBar';
import SortDropdown from '@/components/Myspace/SortDropdown';

const MyspaceToolbar = () => {
  return (
    <div className="flex items-center w-full gap-md h-toolbar min-h-toolbar whitespace-nowrap">
      <SearchBar
        placeholder="프로젝트를 검색하세요"
        bgColor="bg-slate-100"
        width="w-[320px]"
        height="h-[30px]"
      />
      <SortDropdown bgColor="bg-slate-50" width="w-[128px]" height="h-[30px]" />
    </div>
  );
};

export default MyspaceToolbar;
