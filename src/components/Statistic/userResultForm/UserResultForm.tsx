import StatSortDropdown from '@components/Statistic/StatSortDropdown';
import User from './User';

const UserResultForm = () => {
  return (
    <div className="w-[310px] h-[682px] py-4 px-2 border-r-[0.5px] border-blue-300">
      {/* 개별 질문리스트 헤더  */}
      <div className="gap-2">
        {/* 전체설문조회 : StatusBar */}
        <div className="rounded-[40px] bg-blue-400">
          <button className="w-full h-[36px] px-4 text-white text-xs font-bold">
            {' '}
            전체 설문 조회{' '}
          </button>
        </div>

        {/* StatusBar */}
        <div className="w-full px-4 py-2">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-neutral-600">질문 리스트</h1>

            <StatSortDropdown />
          </div>

          {/* 총 질문 개수 */}
          <div className="h-[24px] flex items-center gap-2.5">
            <span className="font-bold text-[10px] text-neutral-400">
              총 질문 40개
            </span>
          </div>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="h-[calc(100vh-230px)] overflow-scroll">
        <div className="flex flex-col items-start">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            () => (
              <User />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserResultForm;
