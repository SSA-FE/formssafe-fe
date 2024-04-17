import Question from '@components/Statistic/remoteForm/Question';
import StatSortDropdown from '../StatSortDropdown';

const RemoteForm = () => {
  return (
    <div className="w-[310px] h-[682px] p-2 sticky top-0 right-0 border-l-[0.5px] border-blue-300">
      {/* 개별 질문리스트 헤더  */}
      <div className="gap-2 bg-white border-b border-slate-100">
        {/* StatusBar */}
        <div className="w-full px-4 py-2">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-neutral-600">질문 리스트</h1>

            <StatSortDropdown />
          </div>

          {/* 총 질문 개수 */}
          <div className="h-[24px] flex items-center gap-2.5">
            <span className="font-bold text-[10px] text-neutral-400">
              총 40개의 질문
            </span>
          </div>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="flex flex-col items-start bg-white">
        {[
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
          '제일 좋아하는 과일이 뭔가요?',
        ].map((q: string, index: number) => (
          <Question question={q} key={'q_' + index} />
        ))}
      </div>
    </div>
  );
};

export default RemoteForm;
