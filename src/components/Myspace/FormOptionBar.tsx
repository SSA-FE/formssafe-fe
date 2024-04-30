import { useState } from 'react';
import { useDispatch } from 'react-redux';
import QuestionOptions from '@/components/Myspace/QuestionOptions';
import OptionsToggle from '@/components/Myspace/OptionsToggle';
import { updateQuestion } from '@/components/Myspace/questionBlockList/questionBlockListSlice';
const FormOptionBar = ({
  setSelectedQuestionType,
  selectedQuestionId,
}: {
  setSelectedQuestionType: (type: string) => void;
  selectedQuestionId: string;
}) => {
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState({
    privacy: true,
    required: false,
  });

  const handleToggle = (type: 'privacy' | 'required') => {
    setToggleState((prevState) => {
      const newToggleState = { ...prevState, [type]: !prevState[type] };
      dispatch(
        updateQuestion({ id: selectedQuestionId, [type]: newToggleState[type] })
      );
      return newToggleState;
    });
  };

  const onQuestionTypeSelected = (type: string) => {
    setSelectedQuestionType(type);
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
      <OptionsToggle
        selectedQuestionId={selectedQuestionId}
        toggleState={toggleState}
        handleToggle={handleToggle}
      />

      {/* 삭제하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 border-t gap-xs border-slate-50">
        <button className="w-full text-sm font-bold text-red-500 bg-neutral-100 h-7">
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default FormOptionBar;
