import { useEndSurveyMutation } from '@/api/formApi';
import statCheckIcon from '@/assets/icons/stat-check-icon.svg';
import editIcon from '@/assets/icons/edit-square-icon.svg';
import printIcon from '@/assets/icons/print-icon.svg';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';

const StatTopBar = () => {
  const [endSurveyMutation] = useEndSurveyMutation();
  const { formId } = useParams<{ formId: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const focusNav = 'border-b-2 border-black';
  const blurNav = 'text-slate-400';

  const printForm = () => {
    instance
      .get(`${API.RESULT}/forms/${formId}/download`, {
        responseType: 'blob',
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '설문결과_전체요약.xlsx');
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEndSurveyClick = () => {
    if (window.confirm('설문을 마감하시겠습니까?')) {
      endSurveyMutation(formId as string)
        .then(() => {
          alert('설문이 성공적으로 마감되었습니다.');
          navigate('/myspace');
        })
        .catch((err) => {
          alert('설문 마감에 실패했습니다.');
          console.error(err);
        });
    }
  };

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

      <div className="flex items-center mx-auto text-xs gap-x-4">
        <div
          className={`p-2 ${location.pathname.split('/').includes('detail') ? blurNav : focusNav}`}
        >
          <Link to={`/stat/${formId}`}>전체요약</Link>
        </div>

        <div
          className={`p-2 ${location.pathname.split('/').includes('detail') ? focusNav : blurNav}`}
        >
          <Link to={`/stat/${formId}/detail`}>개별통계</Link>
        </div>
      </div>

      {/* buttons */}
      <div className="w-[15.25rem] flex justify-end items-center gap-4 text-xs text-slate-50 font-bold">
        <button
          onClick={printForm}
          className="flex items-center px-4 py-2 rounded-full gap-x-2 bg-neutral-400 drop-shadow"
        >
          <img className="cover" src={printIcon} alt="print-icon" />
          <span>출력하기</span>
        </button>
        <button
          onClick={handleEndSurveyClick}
          className="flex items-center px-4 py-2 bg-blue-400 rounded-full gap-x-2 drop-shadow"
        >
          <img className="cover" src={editIcon} alt="edit-icon" />
          <span>마감하기</span>
        </button>
      </div>
    </div>
  );
};
export default StatTopBar;
