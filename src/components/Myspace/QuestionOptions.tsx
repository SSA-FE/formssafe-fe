import { useState, Dispatch, cloneElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SingleIcon,
  CheckboxIcon,
  DropdownIcon,
  TextIcon,
  SentenceIcon,
} from '@/assets/icons/optionsIcons';
import { questionType, questionTypesInfo } from '@/types/questionTypes';
import { setActiveBlockId } from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import { RootState } from '@/store';

interface QuestionOptionsProps {
  setSelectedQuestionType: Dispatch<React.SetStateAction<string>>;
  onQuestionTypeSelected: (type: questionType) => void;
}

const questionTypeIcons = {
  single: <SingleIcon />,
  checkbox: <CheckboxIcon />,
  dropdown: <DropdownIcon />,
  text: <TextIcon />,
  long: <SentenceIcon />,
  short: <SentenceIcon />,
};

const QuestionOptions = ({
  setSelectedQuestionType,
  onQuestionTypeSelected,
}: QuestionOptionsProps) => {
  const dispatch = useDispatch();
  const activeBlockId = useSelector(
    (state: RootState) => state.questionBlockList.activeBlockId
  );
  const activeBlock = useSelector((state: RootState) =>
    state.questionBlockList.questionList.find(
      (block) => block.id === activeBlockId
    )
  );
  const [selectedButton, setSelectedButton] = useState(
    activeBlock ? activeBlock.type : 'single'
  );

  const addQuestionWithType = (type: questionType) => {
    setSelectedButton(type);
    onQuestionTypeSelected(type);
    setSelectedQuestionType(type);
    if (activeBlock) {
      dispatch(setActiveBlockId({ id: activeBlock.id }));
    }
  };

  return (
    <div className="flex flex-col w-full px-4 pt-4 pb-8 border-b-4 gap-md border-slate-50">
      <h2 className="flex gap-[0.75rem] font-bold leading-6 text-neutral-600">
        질문유형
      </h2>
      <div className="flex flex-row gap-x-2">
        {Object.keys(questionTypeIcons).map((type) => (
          <button
            key={type}
            onClick={() => addQuestionWithType(type as questionType)}
            className={`flex items-center justify-center w-10 h-10 rounded ${
              selectedButton === type
                ? 'bg-blue-500 shadow-inner shadow-blue-600'
                : 'bg-neutral-100 shadow shadow-neutral-200'
            }`}
          >
            {cloneElement(questionTypeIcons[type as questionType], {
              fillColor: selectedButton === type ? '#fff' : '#A3A3A3',
            })}
          </button>
        ))}
      </div>
      <div className="flex flex-col w-full p-2 border border-blue-100 blue-100 bg-blue-50 gap-sm">
        <span className="text-xs font-bold text-slate-500">
          {questionTypesInfo[selectedButton].label}
        </span>
        <div className="w-full text-xs text-slate-400">
          {questionTypesInfo[selectedButton].description}
        </div>
      </div>
    </div>
  );
};

export default QuestionOptions;
