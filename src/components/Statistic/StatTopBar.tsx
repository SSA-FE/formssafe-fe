import StatSearchBar from '@components/Statistic/StatSearchBar';

import statCheckIcon from '@/assets/icons/stat-check-icon.svg';
import editIcon from '@/assets/icons/edit-square-icon.svg';

const StatTopBar = () => {
  return (
    <div className="w-full h-[48px] flex items-center px-8">
      {/* text */}
      <div className="w-[309px] flex text-xs gap-x-2 text-slate-400">
        <div className="flex items-center justify-between font-bold gap-x-2">
          <span>가장 좋아하는 과일이 뭔가요?</span>
          <div className="bg-blue-100 rounded-full w-[14px] h-[14px]">
            <img src={statCheckIcon} alt="form_check_image" />
          </div>
        </div>
        <div className="px-3">editor version 3.4.1</div>
      </div>

      <StatSearchBar placeholder="질문을 검색하세요" />

      {/* buttons */}
      <div className="w-[337px] flex items-center gap-4 text-xs text-slate-50 font-bold">
        <button className="w-[93px] h-[36px] rounded-full bg-neutral-400 drop-shadow">
          출력하기
        </button>
        <button className="w-[93px] h-[36px] rounded-full bg-neutral-400 drop-shadow">
          설문지로
        </button>
        <button className="w-[119px] h-[36px] px-6 flex items-center gap-x-4 rounded-full bg-blue-400 drop-shadow">
          <img className="w-[10px] h-[10px]" src={editIcon} alt="edit-icon" />
          <span>마감하기</span>
        </button>
      </div>
    </div>
  );
};

export default StatTopBar;
