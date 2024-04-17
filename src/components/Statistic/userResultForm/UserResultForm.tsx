import StatSortDropdown from '@components/Statistic/StatSortDropdown';
import User from './User';

const UserResultForm = () => {
  return (
    <div className="w-[19rem] h-[calc(100vh-7.75rem)] py-4 px-2 border-r-[0.5px] border-blue-300">
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
      <div className="flex flex-col items-start">
        {[0, 1, 2].map(() => (
          <User />
        ))}
      </div>
    </div>
  );
};

export default UserResultForm;
