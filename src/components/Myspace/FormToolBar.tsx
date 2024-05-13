import { useFetchFormCreationMutation } from '@/api/formApi';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FormToolBar = () => {
  const [createForm] = useFetchFormCreationMutation();
  const navigate = useNavigate();
  //TODO:store에서 가져와서 보내기
  // const formCreationInfo = useSelector(
  //   (state: RootState) => state.questionBlockList
  // );

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
        contents: [
          {
            type: 'text',
            description: '설명 블록입니다. 설문 시작~',
          },
          {
            type: 'short',
            title: '단답형 질문',
            description: '단답으로 답하시오~~',
            isRequired: true,
            isPrivacy: false,
          },
          {
            type: 'single',
            title: '단일 객관식 질문',
            description: '하나만 고르시오~',
            options: ['option1', 'option2', 'option3', 'option4', 'option5'],
            isRequired: true,
            isPrivacy: false,
          },
          {
            type: 'long',
            title: '장문형 질문',
            description: '장문으로 답하시오.',
            isRequired: true,
            isPrivacy: false,
          },
          {
            type: 'dropdown',
            title: '드롭다운 질문',
            description: '드롭다운으로 답하시오.',
            options: ['option1', 'option2', 'option3'],
            isRequired: true,
            isPrivacy: false,
          },
          {
            type: 'checkbox',
            title: '체크박스 질문',
            description: '체크박스로 답하시오~!!!',
            options: ['option1', 'option2', 'option3', 'option4'],
            isRequired: true,
            isPrivacy: false,
          },
        ],
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
