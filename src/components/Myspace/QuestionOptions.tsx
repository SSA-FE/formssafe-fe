import React, { useState } from 'react';
import {
  SingleIcon,
  CheckboxIcon,
  DropdownIcon,
  TextIcon,
  SentenceIcon,
} from '@/assets/icons/optionsIcons';
import { questionType, questionTypeLabels } from '@/types/questionTypes';
import { questionTypeDescriptions } from '@/data/data';

interface QuestionOptionsProps {
  setSelectedQuestionType: React.Dispatch<React.SetStateAction<questionType>>;
  onQuestionTypeSelected: (type: questionType) => void;
}

const QuestionOptions = ({ onQuestionTypeSelected }: QuestionOptionsProps) => {
  const [selectedButton, setSelectedButton] = useState<questionType>('single');
  const questionTypeIcons = {
    single: <SingleIcon />,
    checkbox: <CheckboxIcon />,
    dropdown: <DropdownIcon />,
    text: <TextIcon />,
    long: <SentenceIcon />,
    short: <SentenceIcon />,
  };

  const addQuestionWithType = (type: questionType) => {
    setSelectedButton(type);
    onQuestionTypeSelected(type);
  };

  return (
    <div className="flex flex-col w-full px-4 pt-4 pb-8 border-b-4 gap-md border-slate-50">
      <h2 className="text-xs font-bold text-slate-500">질문 유형</h2>
      <div className="flex flex-row gap-x-2">
        {Object.keys(questionTypeIcons).map((type) => (
          <button
            key={type}
            onClick={() => {
              addQuestionWithType(type as questionType);
            }}
            className={`flex items-center justify-center w-10 h-10 rounded ${
              selectedButton === type
                ? 'bg-blue-500 shadow-inner shadow-blue-600'
                : 'bg-neutral-100 shadow shadow-neutral-200'
            }`}
          >
            {React.cloneElement(questionTypeIcons[type as questionType], {
              fillColor: selectedButton === type ? '#fff' : '#A3A3A3',
            })}
          </button>
        ))}
      </div>
      <div className="flex flex-col w-full p-2 border border-blue-100 blue-100 bg-blue-50 gap-sm">
        <span className="text-xs font-bold text-slate-500">
          {questionTypeLabels[selectedButton]}
        </span>
        <div className="w-full text-xs text-slate-400">
          {questionTypeDescriptions[selectedButton]}
        </div>
      </div>
    </div>
  );
};

export default QuestionOptions;
