import defaultImg from '@assets/images/dafaultImg.jpg';

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
  isTemp?: boolean;
}

const SurveyCard = ({
  title,
  description,
  tags,
  // questionCnt,
  // expectTime,
  startDate,
  // isTemp,
}: SurveyCardProps) => {
  const dateObject = new Date(startDate);
  const formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')}`;

  return (
    <div className="w-[280px] h-[300px] bg-bgColor rounded flex flex-col justify-between">
      <div>
        <img src={defaultImg} alt="기본이미지" className="w-full h-[128px]" />
        <div className="flex flex-col gap-1 px-2 py-2">
          <h1 className="overflow-hidden overflow-ellipsis w-full h-6 text-base font-bold text-neutral-700 whitespace-nowrap">
            {title}
          </h1>
          <p className="text-xs text-neutral-400">{formattedDate} 편집됨</p>
          <p className="text-sm text-neutral-500  text-overflow w-full h-10">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-1 px-2 py-2">
        {tags?.map((tag) => {
          return (
            <span
              key={tag.id}
              className="flex items-center justify-center h-6 px-3 text-xs cursor-pointer whitespace-nowrap text-neutral-100 bg-neutral-500 rounded-xl"
            >
              #{tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SurveyCard;
