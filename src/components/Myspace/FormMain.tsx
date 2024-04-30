import plusIcon from '@/assets/icons/plus-icon.svg';
import QuestionBlockList from './questionBlockList/QuestionBlockList';
import { addQuestion } from './questionBlockList/questionBlockListSlice';
import { useDispatch } from 'react-redux';
import { questionType } from '@/types/questionTypes';

import React from 'react';

type FormMainProps = {
  selectedQuestionType: questionType;
};

const FormMain: React.FC<FormMainProps> = ({ selectedQuestionType }) => {
  const dispatch = useDispatch();

  const handleAddBlock = (type: questionType) => {
    dispatch(
      addQuestion({
        id: crypto.randomUUID(),
        type: type,
        isRequired: true,
        isPrivacy: false,
      })
    );
  };

  return (
    <div className="flex-1 w-full h-full px-4">
      <div className="flex flex-col">
        <QuestionBlockList />
      </div>
      <button
        onClick={() => handleAddBlock(selectedQuestionType)}
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
