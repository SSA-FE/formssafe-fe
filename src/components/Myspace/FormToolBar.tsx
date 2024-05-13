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
  const handleFormCreation = async () => {
    try {
      const response = await createForm({
        title: '그냥 ㅈㅣㄴ짜설문~~!',
        image: [
          'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=1280&h=720&crop=1',
        ],
        description: '그냥 설문!!!',
        endDate: '2024-08-30T13:30:00',
        expectTime: 5,
        contents: contentList,
        tags: ['고양이', '동물'],
        reward: {
          name: '고양이 사료',
          category: '기타',
          count: 10,
        },
        isTemp: false,
      }).unwrap();
      alert('설문이 성공적으로 발행되었습니다.');
      navigate(`/form/${response.formId}`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="bg-white flex w-full px-8 h-12 whitespace-nowrap justify-between items-start">
      <div>
        <p className="text-xs text-blue-400 px-4 py-1 bg-blue-50 border border-blue-200">
          2024/05/05에 마지막으로 수정됨
        </p>
      </div>
      <div className="flex gap-md">
        <button className="border px-8 py-2 text-xs font-bold text-slate-400 rounded-full h-9 hover:bg-slate-50">
          미리보기
        </button>
        <button className="border px-8 py-2 text-xs font-bold text-slate-400 rounded-full h-9 hover:bg-slate-50">
          임시저장
        </button>
        <button
          onClick={handleFormCreation}
          className="shadow-md px-8 py-2 text-xs font-bold text-white bg-blue-500 rounded-full h-9 hover:bg-blue-400"
        >
          발행하기
        </button>
      </div>
    </div>
  );
};

export default FormToolBar;
