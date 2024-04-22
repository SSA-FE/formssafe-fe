const FormOptionBar = () => {
  return (
    <div className="w-[19rem] ml-auto h-[calc(100vh-8rem)] border border-neutral-200 bg-white rounded flex flex-col content-center self-stretch">
      {/* 질문 유형 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 border-b-4 gap-xs border-slate-50">
        <h2 className="text-neutral-800">질문 유형</h2>
        <div className="flex flex-col gap-md">
          <p className="text-xs text-orange-400">
            &#9432; 객관식은 설문자가 여러 개의 정답 중 하나를 고르는
            방식입니다.
          </p>
          <div className="flex gap-sm">
            <button className="w-10 h-10 text-sm bg-neutral-200 text-neutral-400">
              opt
            </button>
            <button className="w-10 h-10 text-sm bg-neutral-200 text-neutral-400">
              opt
            </button>
            <button className="w-10 h-10 text-sm bg-neutral-200 text-neutral-400">
              opt
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {/* 개인정보 */}
        <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
          <span className="text-xs font-bold text-blue-300">
            개인정보
            <span className="ml-1 text-orange-400">&#9432;</span>
          </span>
          <div>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="toggle-btn"></div>
          </div>
        </label>
        {/* 필수응답 */}
        <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
          <span className="text-xs font-bold text-neutral-400">
            필수응답
            <span className="ml-1 text-orange-400">&#9432;</span>
          </span>
          <div>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="toggle-btn"></div>
          </div>
        </label>
      </div>

      {/* 삭제하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 border-t gap-xs border-slate-50">
        <button className="w-full text-sm font-bold text-red-500 bg-neutral-100 h-7">
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default FormOptionBar;
