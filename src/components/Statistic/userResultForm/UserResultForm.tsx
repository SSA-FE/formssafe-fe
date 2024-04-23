import User from './User';

const UserResultForm = () => {
  return (
    <div className="flex flex-1 flex-col w-[312px] h-[336.5px] py-4 px-2 border-r-[0.5px] border-b-[0.5px] border-blue-300 bg-slate-100">
      {/* 개별 질문리스트 헤더  */}
      <div className="gap-2 h-[86px]">
        {/* StatusBar */}
        <div className="w-full px-4 py-2">
          <div className="flex items-center justify-center">
            <h1 className="text-xs font-bold text-slate-400">
              총 40명의 설문자
            </h1>
          </div>

          {/* 총 질문 개수 */}
          <div className="h-[24px] flex items-center gap-2.5">
            <span className="font-bold text-[10px] text-neutral-400">
              총 응답자 40명
            </span>
          </div>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-start ">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map(() => (
            <User />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserResultForm;
