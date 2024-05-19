import defaultImg from '@assets/images/defaultImg.png';
import { palette } from '@/utils/tagPalette';
import { Reward } from '@/api/activityApi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Tag {
  id: number;
  name: string;
  count?: number;
}

interface FormCardProps {
  to: string;
  path: string;
  activeTap?: string;
  selectedSurvey?: number | undefined;
  id: number;
  title: string;
  description?: string;
  thumbnail?: string;
  tags?: Tag[];
  questionCnt: number;
  reward?: Reward;
  expectTime: number;
  startDate: string;
  endDate?: string;
  isTemp?: boolean;
}

const formatDate = (date: Date) => {
  return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
};

const formatEndDate = (date: Date) => {
  return `${formatDate(date)} - ${String(date.getHours()).padStart(2, '0')}시 ${String(date.getMinutes()).padStart(2, '0')}분`;
};

const createTagElements = (tags: Tag[]) => {
  const tagElements = [];
  const tagLength = tags.length;

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

  return tagElements;
};

const FormCard = ({
  to,
  path,
  activeTap,
  selectedSurvey,
  id,
  title,
  description,
  thumbnail,
  tags,
  questionCnt,
  reward,
  expectTime,
  startDate,
  endDate,
  isTemp,
}: FormCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const startDateObject = new Date(startDate);
  const endDateObject = endDate ? new Date(endDate) : undefined;
  const isExpired = endDateObject
    ? endDateObject.getTime() < Date.now()
    : false;
  const formattedStartDate = formatDate(startDateObject);
  const formattedEndDate = endDateObject ? formatEndDate(endDateObject) : '';
  const tagElements = tags ? createTagElements(tags) : [];

  return (
    <Link
      to={isExpired || activeTap === '등록한 설문' ? '#' : `/form/${to}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (isExpired && activeTap !== '등록한 설문') {
          e.preventDefault();
          alert('마감된 설문입니다.');
        }
      }}
      className={`group min-w-[20.875rem] h-[300px] bg-white hover:bg-slate-200 rounded flex flex-col justify-between p-2 gap-4 border  hover:border-slate-300 shadow-sm ${selectedSurvey === id ? 'border-blue-400' : 'border-slate-200'}`}
    >
      <div className="relative group">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full z-0 h-[10rem] rounded object-contain"
          />
        ) : (
          <img
            src={defaultImg}
            alt="기본이미지"
            className="w-full z-0 h-[10rem] rounded object-contain"
          />
        )}

        <div className="absolute bottom-0 left-0 flex flex-wrap w-full gap-1 px-2 py-2">
          {tagElements}
        </div>
        <div className="absolute top-0 left-0 w-full h-[10rem] bg-black bg-opacity-50  text-slate-50 text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
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
            <p className="text-red-500">
              <strong>임시 설문</strong>
            </p>
          )}
        </div>
      </div>
      <div className="relative flex flex-col justify-between h-full gap-2 px-2 group">
        {path === '/board' && (
          <>
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
          </>
        )}
        {(!isHovered && path === '/myspace') || activeTap === '참여한 설문' ? (
          <>
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
          </>
        ) : isTemp ? (
          path === '/myspace' &&
          activeTap === '등록한 설문' && (
            <div className="flex items-center justify-center w-full h-full">
              <button className="absolute w-full left-0 h-8 p-2 text-sm text-white transition-opacity duration-100 bg-blue-500 opacity-0 rounded-[48px] group-hover:opacity-100 flex justify-center items-center">
                작성하기
              </button>
            </div>
          )
        ) : (
          path === '/myspace' &&
          activeTap === '등록한 설문' && (
            <div className="absolute left-0 w-full">
              <Link
                to={isExpired ? '#' : `/form/${to}`}
                onClick={(e) => {
                  if (isExpired) {
                    e.preventDefault();
                    alert('마감된 설문입니다.');
                  }
                }}
                className="w-full h-8 p-2 mb-4 text-sm text-white transition-opacity duration-100 bg-blue-400 opacity-0 rounded-[48px] group-hover:opacity-100 flex justify-center items-center"
              >
                설문 보기
              </Link>
              <Link
                to={`/stat/${to}`}
                className="w-full h-8 p-2 text-sm text-white transition-opacity duration-100 bg-slate-400 opacity-0 rounded-[48px] group-hover:opacity-100 flex justify-center items-center"
              >
                통계 확인
              </Link>
            </div>
          )
        )}
      </div>
    </Link>
  );
};

export default FormCard;
