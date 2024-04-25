import statCheckIcon from '@/assets/icons/stat-check-icon.svg';
import editIcon from '@/assets/icons/edit-square-icon.svg';
import { Link } from 'react-router-dom';

const StatTopBar = () => {
  return (
    <div className="flex items-center w-full h-12 px-8 py-2">
      {/* text */}
      <div className="w-[21rem] flex text-xs gap-x-2 text-slate-400">
        <div className="flex items-center justify-between font-bold gap-x-2">
          <span>가장 좋아하는 과일이 뭔가요?</span>
          <div className="bg-blue-100 rounded-full w-[14px] h-[14px]">
            <img src={statCheckIcon} alt="form_check_image" />
          </div>
        </div>
        <div className="px-3">editor version 3.4.1</div>
      </div>

      <div className="flex items-center mx-auto gap-x-4">
        <div className="p-2 border-b-2 border-black">
          <Link to="/stat">전체요약</Link>
        </div>

        <div className="p-2 text-slate-400">
          <Link to="/stat/1">개별통계</Link>
        </div>
      </div>

      {/* buttons */}
      <div className="w-[15.25rem] flex justify-between items-center gap-4 text-xs text-slate-50 font-bold">
        <button className="w-[6.8125rem] h-9 rounded-full bg-neutral-400 drop-shadow">
          출력하기
        </button>
        <button className="w-[7.4375rem] h-9 px-6 flex items-center gap-x-2 rounded-full bg-blue-400 drop-shadow">
          <img className="w-[10px] h-[10px]" src={editIcon} alt="edit-icon" />
          <span>마감하기</span>
        </button>
      </div>
    </div>
  );
};

export default StatTopBar;
