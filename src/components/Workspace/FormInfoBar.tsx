const FormInfoBar = () => {
  return (
    <div className="w-[19rem] ml-auto  h-[calc(100vh-4rem)] border border-neutral-200 bg-neutral-50 rounded flex flex-col content-center self-stretch py-3 divide-y">
      {/* 좋아하는 과일 설문지 */}
      <div className="w-full px-4 flex flex-col gap-2.5">
        <h2 className="font-bold leading-6 text-neutral-600">
          # title 좋아하는 과일 설문지 좋아하는 과일 설문지
        </h2>
        <img
          className="object-cover w-[17rem] h-24 rounded-lg"
          src="https://picsum.photos/200/300"
          alt="검색 아이콘"
        />
        <div className="p-2 text-xs border rounded-lg bg-neutral-100 border-neutral-200 text-neutral-500">
          contents 좋아하는 과일 조사하기 설문입니다. 무슨 과일을 제일
          좋아하세요? 나는 딸기
        </div>
      </div>
      {/* 제한시간 */}
      <div className="w-full px-4">제한시간</div>
      {/* 태그 */}
      <div className="w-full px-4">태그</div>
      {/* 발행하기 */}
      <div className="w-full px-4">발행하기</div>
    </div>
  );
};

export default FormInfoBar;
