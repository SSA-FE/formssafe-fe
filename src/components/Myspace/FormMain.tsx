import plusIcon from '@/assets/icons/plus-icon.svg';
import QuestionBlockList from './questionBlockList/QuestionBlockList';
import {
  addQuestion,
  setActiveBlockId,
} from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import { useDispatch } from 'react-redux';
import { questionType } from '@/types/questionTypes';

type FormMainProps = {
  selectedQuestionType: questionType;
};

const FormMain: React.FC<FormMainProps> = ({ selectedQuestionType }) => {
  const dispatch = useDispatch();

  const handleAddBlock = () => {
    const newQuestionId = crypto.randomUUID();
    const newQuestion = {
      id: newQuestionId,
      type: selectedQuestionType,
      isRequired: true,
      isPrivacy: false,
    };
    dispatch(addQuestion(newQuestion));
    dispatch(setActiveBlockId({ id: newQuestionId }));
  };

  return (
    <div className="flex-1 w-full h-[calc(100vh-8rem)] px-4 overflow-y-scroll pb-10">
      <div className="flex flex-col">
        <QuestionBlockList />
      </div>
      <button
        onClick={handleAddBlock}
        className="w-8 h-8 rounded-full bg-[#d9d9d9] flex justify-center items-center mx-auto mt-8"
      >
        <img
          src={plusIcon}
          alt="설문추가 아이콘"
          className="w-[19px] h-[19px]"
        />
      </button>
    </div>
  );
};

export default FormMain;
