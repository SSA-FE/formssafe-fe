import TempSaveIcon from '@/assets/icons/temp-save-icon.svg?react';

interface Tag {
  id: number;
  name: string;
  count: number;
}

interface SurveyCardProps {
  title: string;
  description?: string;
  tags?: Tag[];
  questionCnt: number;
  expectTime: number;
  startDate: string;
  isTemp: boolean;
}

const SurveyCard = ({
  title,
  description,
  tags,
  questionCnt,
  expectTime,
  startDate,
  isTemp,
}: SurveyCardProps) => {
  const dateObject = new Date(startDate);
  const formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')}`;

  return (
    <div className="w-full bg-white border rounded-lg max-w-surveyCard border-neutral-300">
      <div className="flex items-center justify-between w-full gap-2 px-5 pt-4 pb-[10px] border-neutral-300 border-b-[1px]">
        <div className="flex items-center gap-x-2">
          <h1 className="w-40 overflow-hidden text-base font-bold overflow-ellipsis text-neutral-600 whitespace-nowrap">
            {title}
          </h1>
          {isTemp && (
            <p className="w-[14px] h-[14px]">
              <TempSaveIcon />
            </p>
          )}
        </div>

        <h2 className="gap-4 text-xs font-normal text-neutral-400 whitespace-nowrap">
          LastEdit on {formattedDate}
        </h2>
      </div>
      <div className="flex flex-col p-4 gap-y-4">
        <p className="w-full h-10 px-2 text-sm font-normal text-neutral-500 text-overflow">
          {description}
        </p>
        <div className="flex flex-col px-4 py-2 text-xs border rounded-lg border-neutral-200 gap-y-1 text-neutral-400">
          <p>
            <strong>문항수</strong>&nbsp;{questionCnt}
            개&nbsp;
          </p>
          <p>
            <strong>예상소요시간</strong>&nbsp;{expectTime}분
          </p>
        </div>
        <div className="flex h-6 gap-x-2">
          {tags?.map((tag) => {
            return (
              <span
                key={tag.id}
                className="flex items-center justify-center px-3 text-xs font-bold cursor-pointer whitespace-nowrap text-neutral-100 bg-neutral-500 rounded-xl"
              >
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
