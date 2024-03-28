import adjustIcon from '@/assets/icons/adjust-icon.svg';

const FormInfoBar = () => {
  return (
    <div className="w-[19rem] ml-auto h-[calc(100vh-7.75rem)] border border-neutral-200 bg-white rounded flex flex-col content-center self-stretch divide-y">
      {/* 좋아하는 과일 설문지 */}
      <div className="w-full px-4 flex flex-col gap-2.5 pt-3 pb-4">
        <h2 className="font-bold leading-6 text-neutral-600">
          # title 좋아하는 과일 설문지 좋아하는
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
      {/* 태그 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-md">
        <h2 className="text-neutral-800">태그</h2>
        <div className="flex flex-col overflow-x-scroll scrollbar gap-sm whitespace-nowrap">
          <div className="flex pb-4 gap-sm">
            <button className="text-xs text-nowrap">생성버튼</button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
          </div>
        </div>
      </div>
      {/* 제한시간 */}
      <div className="flex justify-between w-full px-4 pt-3 pb-4">
        <h2 className="text-neutral-800">제한시간</h2>
        <button>
          <img src={adjustIcon} alt="시간조절 아이콘" />
        </button>
      </div>
      {/* 마감 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
        <h2 className="text-neutral-800">마감</h2>
        <div className="flex flex-col gap-md">
          <p className="text-xs text-orange-400">
            &#9432; 마감 날짜는 한 번 지정하면 바꿀 수 없습니다.
          </p>
          <button className="w-full text-sm bg-neutral-200 text-neutral-400 h-7">
            설정
          </button>
        </div>
      </div>
      {/* 경품정하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
        <h2 className="text-neutral-800">경품 정하기</h2>
        <div className="flex flex-col gap-md">
          <p className="text-xs text-red-500">
            &#9432; 경품은 한 번 지정하면 변경할 수 없습니다.
          </p>
          <button className="w-full text-sm bg-neutral-200 text-neutral-400 h-7">
            설정
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInfoBar;
