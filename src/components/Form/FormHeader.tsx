import { Form } from '@/api/viewApi';
import RewardIcon from '@/assets/icons/reward-icon.svg?react';
import { calculateLeftDays } from '@/utils/calculateLeftDays';

interface FormHeaderProps {
  formData: Form;
}

const FormHeader = ({ formData }: FormHeaderProps) => {
  const {
    title,
    description,
    tags,
    expectTime,
    questionCnt,
    reward,
    startDate,
    endDate,
  } = formData;

  const dateObject = new Date(startDate);
  const formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')}`;
  return (
    <div className="p-8 text-slate-500 bg-white">
      <div className="flex justify-between jus mb-4">
        <div className="text-xs bg-slate-100 px-2 py-1">
          <p>질문 {questionCnt}문항</p>
          <p>예상 소요시간 {expectTime}분</p>
        </div>
        <div className="flex gap-2 items-start">
          <p className="flex bg-slate-500 text-white text-xs font-bold px-2 py-1 gap-1 items-center leading-4">
            <RewardIcon />
            {reward?.count} 명
          </p>
          <p className="bg-slate-500 text-white text-xs font-bold px-2 py-1">
            마감임박
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-slate-700 ">{title}</h1>
          <p className="text-slate-500 text-xs bg-slate-100 p-1">
            <span className="font-bold">{formattedDate}</span> 배포됨
            <span className="font-bold ml-2">
              {calculateLeftDays(endDate)}일 남음
            </span>
          </p>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex gap-2 mt-12">
        {tags?.map((tag) => (
          <div key={tag.id} className="tag leading-6">
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormHeader;
