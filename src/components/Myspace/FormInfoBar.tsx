import Calendar from '@components/Myspace/Calendar';
import adjustIcon from '@/assets/icons/adjust-icon.svg';
import trophyIcon from '@/assets/icons/trophy-icon.svg';

const FormInfoBar = () => {
  return (
    <div className="border-r border-slate-200 w-[19rem] ml-auto h-[calc(100vh-7.75rem)] bg-white flex flex-col content-center self-stretch">
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
        <div className="p-2 text-xs rounded-lg bg-neutral-100 text-neutral-500">
          contents 좋아하는 과일 조사하기 설문입니다. 무슨 과일을 제일
          좋아하세요? 나는 딸기
        </div>
      </div>

      {/* 설명 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
        <h2 className="font-bold text-neutral-400">설명</h2>
        <textarea
          className="flex flex-col h-16 p-2 text-xs border outline-none resize-none gap-md border-slate-200 bg-slate-50"
          placeholder="설명을 입력하세요."
        />
      </div>

      {/* 태그 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-md">
        <h2 className="font-bold text-neutral-400">태그</h2>
        <div className="flex flex-col overflow-x-scroll scrollbar gap-sm whitespace-nowrap">
          <div className="flex pb-4 gap-sm">
            <button className="text-xs text-nowrap">생성버튼</button>
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
      <div className="flex flex-col w-full px-4 pt-3 pb-4">
        <h2 className="font-bold text-neutral-400">마감일</h2>
        <Calendar />
      </div>
      {/* 경품정하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs bg-blue-50">
        <h2 className="flex text-sm font-bold text-mainColor gap-x-2">
          <img src={trophyIcon} alt="경품 아이콘" />
          경품 정하기
        </h2>
        <div className="flex flex-col gap-md">
          <p className="text-xs text-orange-400">
            &#9432; 경품을 정해서 설문자를 모아보세요.
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
