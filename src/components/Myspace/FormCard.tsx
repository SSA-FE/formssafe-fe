import defaultImg from '@assets/images/dafaultImg.jpg';
import { palette } from '@/utils/tagPalette';
import { Reward } from '@/api/activityApi';

interface Tag {
  id: number;
  name: string;
  count: number;
}

interface FormCardProps {
  selectedSurvey?: number | undefined;
  id: number;
  title: string;
  description?: string;
  tags?: Tag[];
  questionCnt: number;
  reward?: Reward;
  expectTime: number;
  startDate: string;
  endDate?: string;
  isTemp?: boolean;
}

const FormCard = ({
  selectedSurvey,
  id,
  title,
  description,
  tags,
  questionCnt,
  reward,
  expectTime,
  startDate,
  endDate,
  isTemp,
}: FormCardProps) => {
  const startDateObject = new Date(startDate);
  const endDateObject = endDate ? new Date(endDate) : undefined;
  const formattedStartDate = `${startDateObject.getFullYear()}/${String(startDateObject.getMonth() + 1).padStart(2, '0')}/${String(startDateObject.getDate()).padStart(2, '0')}`;
  const formattedEndDate = endDateObject
    ? `${endDateObject.getFullYear()}/${String(endDateObject.getMonth() + 1).padStart(2, '0')}/${String(endDateObject.getDate()).padStart(2, '0')} - ${String(endDateObject.getHours()).padStart(2, '0')}시 ${String(endDateObject.getMinutes()).padStart(2, '0')}분`
    : '';
  const tagElements = [];

  if (tags) {
    const tagLength = tags?.length || 0;

    for (let idx = 0; idx < (tagLength > 3 ? 3 : tagLength); idx++) {
      const tag = tags[idx];
      tagElements.push(
        <span
          key={tag.id}
          className={`flex items-center justify-center text-xs font-bold tag ${idx > 1 ? 'text-slate-400' : 'text-slate-50'}`}
          style={{ backgroundColor: palette.colors[idx] }}
        >
          {tag.name}
        </span>
      );
    }

    if (tagLength > 3) {
      tagElements.push(
        <span
          key="more"
          className={`flex items-center justify-center text-xs font-bold tag ${tagLength > 1 ? 'text-slate-400' : 'text-slate-50'}`}
        >
          +{tagLength - 3}
        </span>
      );
    }
  }

  return (
    <div
      className={`group min-w-[256px] h-[252px] bg-white hover:bg-slate-200 rounded flex flex-col justify-between p-2 gap-4 border  hover:border-slate-300 shadow-sm ${selectedSurvey === id ? 'border-blue-400' : 'border-slate-200'}`}
    >
      <div className="relative group">
        <img
          src={defaultImg}
          alt="기본이미지"
          className="w-full z-0 h-[128px] rounded"
        />
        <div className="absolute bottom-0 left-0 flex flex-wrap w-full gap-1 px-2 py-2">
          {tagElements}
        </div>
        <div className="absolute top-0 left-0 w-full h-[128px] bg-black bg-opacity-50  text-slate-50 text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          <p>
            <strong>문항수:</strong> {questionCnt}문항
          </p>
          <p>
            <strong>보상:</strong> {reward?.category}({reward?.count}개)
          </p>
          <p>
            <strong>예상 소요시간:</strong>{' '}
            {expectTime === 0 ? '미정' : `${expectTime}분`}
          </p>
          {endDate && (
            <p>
              <strong>마감 시각:</strong> {formattedEndDate}
            </p>
          )}
          {isTemp && (
            <p className="text-[#6ED1F9]">
              <strong>임시 설문</strong>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full gap-2 px-2">
        <div>
          <h1 className="w-full h-6 overflow-hidden text-base font-bold overflow-ellipsis text-neutral-700 whitespace-nowrap">
            {title}
          </h1>
          <p className="w-full h-10 text-sm text-neutral-500 text-overflow">
            {description}
          </p>
        </div>
        <div className="flex justify-center  w-[120px] rounded-2xl bg-slate-100 group-hover:bg-slate-400">
          <p className="text-xs text-neutral-400 group-hover:text-slate-50">
            {formattedStartDate} 편집됨
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
