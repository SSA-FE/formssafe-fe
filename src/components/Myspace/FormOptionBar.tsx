import { useDispatch, useSelector } from 'react-redux';
import QuestionOptions from '@/components/Myspace/QuestionOptions';
import OptionsToggle from '@/components/Myspace/OptionsToggle';
import {
  removeQuestion,
  setActiveBlockId,
} from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import { RootState } from '@/store';

const FormOptionBar = ({
  setSelectedQuestionType,
}: {
  setSelectedQuestionType: (type: string) => void;
}) => {
  const dispatch = useDispatch();
  const activeBlockId = useSelector(
    (state: RootState) => state.questionBlockList.activeBlockId
  );

  const onQuestionTypeSelected = (type: string) => {
    setSelectedQuestionType(type);
  };

  const handleDelete = () => {
    dispatch(removeQuestion({ id: activeBlockId }));
    dispatch(setActiveBlockId({ id: '' }));
  };

  return (
    <div className="w-[19rem] ml-auto h-[calc(100vh-8rem)] border border-neutral-200 bg-white rounded flex flex-col content-center self-stretch">
      {/* 질문 유형 */}
      <QuestionOptions
        setSelectedQuestionType={(type) =>
          setSelectedQuestionType(type as string)
        }
        onQuestionTypeSelected={onQuestionTypeSelected}
      />
      {/* 개인정보와 필수응답 */}
      <OptionsToggle selectedQuestionId={activeBlockId} />

      {/* 삭제하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 border-t gap-xs border-slate-50">
        <button
          onClick={handleDelete}
          className="w-full text-sm font-bold text-red-500 bg-neutral-100 h-7"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default FormOptionBar;
