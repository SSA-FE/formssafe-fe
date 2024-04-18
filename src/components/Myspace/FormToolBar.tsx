import SearchBar from '@/components/Myspace/SearchBar';
import visibleIcon from '@/assets/icons/visible-icon.svg';

const FormToolBar = () => {
  return (
    <div className="flex w-full px-8 h-[3.25rem] min-h-[3.25rem] whitespace-nowrap justify-between items-start border-b-neutral-200 border-b">
      <div className="flex gap-md">
        <button className="box-border px-6 py-2 text-sm text-white rounded bg-neutral-800">
          지금 발행하기
        </button>
        <button className="flex items-center py-2 pl-4 pr-6 text-sm rounded gap-md bg-neutral-300">
          <img src={visibleIcon} alt="미리보기 아이콘" />
          미리보기
        </button>
      </div>
      <div className="flex flex-row items-center text-xs select-none gap-md text-neutral-400">
        <span>version-2024</span>
        <SearchBar
          placeholder="질문을 검색하세요"
          bgColor="bg-neutral-100"
          width="w-[107px]"
          height="h-[36px]"
        />
      </div>
    </div>
  );
};

export default FormToolBar;
