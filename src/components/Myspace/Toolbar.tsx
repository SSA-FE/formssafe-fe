import SearchBar from '@/components/Myspace/SearchBar';
import SortDropdown from '@/components/Myspace/SortDropdown';

const Toolbar = () => {
  return (
    <div className="flex items-center w-full px-8 gap-md h-toolbar min-h-toolbar whitespace-nowrap">
      <SearchBar />
      <SortDropdown />
    </div>
  );
};

export default Toolbar;
