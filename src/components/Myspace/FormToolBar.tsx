import { Content, useFetchFormCreationMutation } from '@/api/formApi';
import { RootState } from '@/store';
import { questionBlock } from '@/types/questionTypes';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FormToolBar = () => {
  const [createForm] = useFetchFormCreationMutation();
  const navigate = useNavigate();
  const questionList = useSelector(
    (state: RootState) => state.questionBlockList.questionList
  );
  const formMetaData = useSelector((state: RootState) => state.formMetaData);

  const contentList: Content[] = questionList.map(
    (question: questionBlock) => ({
      type: question.type,
      title: question.title,
      description: question.description,
      options: question.options?.map((option) => option.value),
      isRequired: question.isRequired,
      isPrivacy: question.isPrivacy,
    })
  );

  const handleFormCreation = async (isTemp: boolean) => {
    try {
      const response = await createForm({
        title: formMetaData.title,
        image: formMetaData.image,
        description: formMetaData.description,
        endDate: formMetaData.endDate,
        expectTime: formMetaData.expectTime,
        contents: contentList,
        tags: formMetaData.tags,
        reward: formMetaData.reward,
        isTemp: isTemp,
      }).unwrap();
      if (isTemp) {
        alert('설문이 임시 저장되었습니다.');
        navigate('/myspace');
      } else {
        alert('설문이 성공적으로 발행되었습니다.');
        navigate(`/form/${response.formId}`);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="flex items-start justify-end w-full h-12 px-8 bg-white whitespace-nowrap">
      <div className="flex gap-md">
        {/* <button className="px-8 py-2 text-xs font-bold border rounded-full text-slate-400 h-9 hover:bg-slate-50">
          미리보기
        </button>
        <button
          onClick={() => handleFormCreation(true)}
          className="px-8 py-2 text-xs font-bold border rounded-full text-slate-400 h-9 hover:bg-slate-50"
        >
          임시저장
        </button> */}
        <button
          onClick={() => handleFormCreation(false)}
          className="px-8 py-2 text-xs font-bold text-white bg-blue-500 rounded-full shadow-md h-9 hover:bg-blue-400"
        >
          발행하기
        </button>
      </div>
    </div>
  );
};

export default FormToolBar;
