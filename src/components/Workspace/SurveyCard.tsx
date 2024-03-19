import TempSaveIcon from '@/assets/icons/temp-save-icon.svg';

interface ISurveyCard {
  tags?: string[];
  questionCnt: number;
  expectTime: number;
  isTemp: boolean;
}

const SurveyCard = ({
  tags, // 태그 리스트
  questionCnt, // 설문 문항 수
  expectTime, // 설문 예상 시간
  isTemp, // 임시 저장 여부
}: ISurveyCard) => {
  return (
    <div className="w-full border rounded-lg max-w-surveyCard border-neutral-300">
      <div className="flex items-center justify-between w-full gap-2 px-5 pt-4 pb-[10px] border-neutral-300 border-b-[1px]">
        <div className="flex items-center gap-x-2">
          <h1 className="text-base font-bold text-neutral-600 whitespace-nowrap">
            좋아하는 음식
          </h1>
          {isTemp && (
            <p className="w-[14px] h-[14px]">
              <img src={TempSaveIcon} alt="임시 저장 여부 아이콘" />
            </p>
          )}
        </div>

        <h2 className="gap-4 text-xs font-normal hmm text-neutral-400 whitespace-nowrap">
          LastEdit on 2023/02/16
        </h2>
      </div>
      <div className="flex flex-col p-4 gap-y-4">
        <p className="px-2 text-sm font-normal text-neutral-500">
          좋아하는 음식을 설문조사해서 맛있는 음식을 판매합니다. 사람들이
          좋아하는 음식은 무엇일까요?
        </p>
        <div className="flex flex-col px-4 py-2 text-xs border rounded-lg border-neutral-200 gap-y-1 text-neutral-400">
          <p>
            <strong>문항수</strong>&nbsp;{questionCnt}
            개&nbsp;
            <strong>소요시간</strong>&nbsp;30분
          </p>
          <p>
            <strong>예상시간</strong>&nbsp;{expectTime}초
          </p>
          <p>
            <strong>임시저장본</strong>
          </p>
        </div>
        <div className="flex h-6 gap-x-2">
          {tags?.map((tag) => {
            return (
              <span
                key={tag}
                className="flex items-center justify-center px-3 text-xs font-bold cursor-pointer whitespace-nowrap text-neutral-100 bg-neutral-500 rounded-xl"
              >
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
