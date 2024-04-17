import SearchBar from '@/components/Myspace/SearchBar';
import SortDropdown from '@/components/Myspace/SortDropdown';

const Toolbar = () => {
  return (
    <div className="flex items-center w-full px-8 my-4 gap-md h-toolbar min-h-toolbar whitespace-nowrap">
      <SearchBar
        placeholder="프로젝트를 검색하세요"
        bgColor="bg-white"
        width="w-[216px]"
        height="h-[36px]"
      />
      <SortDropdown bgColor="bg-white" width="w-[182px]" height="h-[36px]" />
    </div>
  );
};

export default Toolbar;
