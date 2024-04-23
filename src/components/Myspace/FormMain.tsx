import plusIcon from '@/assets/icons/plus-icon.svg';
import QuestionBlockList from './questionBlockList/QuestionBlockList';
import { addQuestion } from './questionBlockList/questionBlockListSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const FormMain = () => {
  const dispatch = useDispatch();
  const questionBlock = useSelector((store: RootState) => store.questionBlock);

  const handleAddBlock = () => {
    dispatch(
      addQuestion({
        id: crypto.randomUUID(),
        type: questionBlock.type,
        isRequired: questionBlock.isRequired,
        isPrivacy: questionBlock.isPrivacy,
      })
    );
  };

  return (
    <div className="flex-1 w-full h-full px-4">
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
