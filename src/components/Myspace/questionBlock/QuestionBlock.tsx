import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateQuestion } from '../questionBlockList/questionBlockListSlice';
import { useState } from 'react';
import OptionList, { option } from './OptionList';

const questionTypeLabels = {
  single: '객관식',
  checkbox: '체크박스',
  dropdown: '드롭다운',
  long: '단답형',
  short: '장문형',
  text: '텍스트',
};

export type questionType =
  | 'single'
  | 'checkbox'
  | 'dropdown'
  | 'long'
  | 'short'
  | 'text';

interface QuestionBlockProps {
  questionId: string;
  questionType: questionType;
}

interface QuestionBlockInputs {
  title: string;
  description?: string;
}

const QuestionBlock = ({ questionType, questionId }: QuestionBlockProps) => {
  const { register, handleSubmit } = useForm<QuestionBlockInputs>();
  const [optionList, setOptionList] = useState<option[]>([]);
  const dispatch = useDispatch();

  const handleUpdateBlockData: SubmitHandler<QuestionBlockInputs> = (data) => {
    dispatch(
      updateQuestion({
        id: questionId,
        type: questionType,
        title: data.title,
        description: data.description,
        options: optionList,
        isRequired: true,
        isPrivacy: false,
      })
    );
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onBlur={handleSubmit(handleUpdateBlockData)}
      className="group/block relative w-full rounded-lg border border-transparent bg-white hover:bg-slate-50 focus-within:bg-slate-50  focus-within:border-slate-200"
    >
      <button
        type="button"
        className="invisible group-hover/block:visible flex absolute right-2 top-2 justify-center items-center w-6 h-6 text-neutral-400 text-sm font-bold p-2"
      >
        ⸬
      </button>
      <header className="flex flex-col gap-1 p-6 pt-5 pb-2 text-slate-500">
        <p className="text-xs font-bold">{questionTypeLabels[questionType]}</p>
        <input
          {...register('title')}
          placeholder="질문을 입력해주세요."
          className="text-lg w-full bg-transparent hover:bg-slate-100 outline-none border-b border-b-transparent focus:border-slate-300 focus:bg-slate-100 border-slate-300"
        />
        <input
          {...register('description')}
          placeholder="질문에 대해 추가로 필요한 설명이나 제한사항을 입력하세요."
          className="w-full bg-transparent outline-none border-b border-b-transparent  hover:bg-slate-100  focus:border-slate-300 focus:bg-slate-100 border-slate-300"
        />
      </header>
      <section className="py-1 text-slate-500">
        {questionType === 'single' ||
        questionType === 'checkbox' ||
        questionType === 'dropdown' ? (
          <OptionList
            questionType={questionType}
            optionList={optionList}
            setOptionList={setOptionList}
          />
        ) : (
          <input
            type="text"
            value={questionTypeLabels[questionType]}
            readOnly
          />
        )}
      </section>
    </div>
  );
};

export default QuestionBlock;
