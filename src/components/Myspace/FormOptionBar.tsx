const FormOptionBar = () => {
  return (
    <div className="w-[19rem] ml-auto h-[calc(100vh-7.75rem)] border border-neutral-200 bg-white rounded flex flex-col content-center self-stretch divide-y">
      {/* 질문 유형 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
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
      {/* 파일 선택 */}
      <div className="flex items-center w-full px-4 pt-3 pb-4 text-xs gap-sm text-neutral-500">
        <button className="bg-neutral-200 px-4 py-1.5 rounded-lg">
          파일 선택하기
        </button>
        <span>질문 이미지 설정하기</span>
      </div>
      {/* 플레이스홀더 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
        <h2 className="text-neutral-800">플레이스홀더</h2>
        <div className="flex flex-col gap-md">
          <p className="text-xs text-orange-400">
            &#9432; 질문에 기본적으로 나타날 문자입니다.
          </p>
          <textarea className="w-full h-16 p-2 text-xs border rounded-lg resize-none outline-neutral-500 border-neutral-300 bg-neutral-100 text-neutral-400" />
        </div>
      </div>
      {/* 삭제하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
        <button className="w-full text-sm text-red-500 bg-neutral-200 h-7">
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default FormOptionBar;
