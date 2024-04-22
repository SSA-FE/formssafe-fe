import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateQuestion } from '../questionBlockList/questionBlockListSlice';
import { useState } from 'react';
import OptionList, { option } from './OptionList';
import TextIcon from '@/assets/icons/text-icon.svg?react';
import { DraggableProvided } from 'react-beautiful-dnd';
import TextBlock from './TextBlock';

const questionTypeLabels = {
  single: '객관식',
  checkbox: '체크박스',
  dropdown: '드롭다운',
  long: '장문형',
  short: '단답형',
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
  dragHandler: DraggableProvided['dragHandleProps'];
}

export interface QuestionBlockInputs {
  title: string;
  description?: string;
}

const QuestionBlock = ({
  questionType,
  questionId,
  dragHandler,
}: QuestionBlockProps) => {
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
      className="group/block p-6 relative w-full rounded-lg border border-transparent bg-white hover:bg-slate-50 focus-within:bg-slate-50  focus-within:border-slate-200"
    >
      <div
        {...dragHandler}
        className="invisible group-hover/block:visible flex absolute right-2 top-2 justify-center items-center w-6 h-6 text-neutral-400 text-sm font-bold p-2"
      >
        ⸬
      </div>
      <p className="text-xs font-bold  text-slate-500 mb-1">
        {questionTypeLabels[questionType]}
      </p>
      <>
        {questionType === 'text' ? (
          <TextBlock register={register} />
        ) : (
          <>
            <header className="flex flex-col gap-1 pb-2 text-slate-500">
              <input
                {...register('title')}
                placeholder="질문을 입력해주세요."
                className="text-lg w-full bg-transparent hover:bg-slate-100 outline-none border-b border-b-transparent focus:border-slate-300 focus:bg-slate-100 border-slate-300 placeholder:text-slate-400"
              />
              <input
                {...register('description')}
                placeholder="질문에 대해 추가로 필요한 설명이나 제한사항을 입력하세요."
                className="w-full bg-transparent outline-none border-b border-b-transparent  hover:bg-slate-100  focus:border-slate-300 focus:bg-slate-100 border-slate-300 placeholder:text-slate-400"
              />
            </header>
            <section className="py-1 mb-4 text-slate-500">
              {questionType === 'single' ||
              questionType === 'checkbox' ||
              questionType === 'dropdown' ? (
                <OptionList
                  questionType={questionType}
                  optionList={optionList}
                  setOptionList={setOptionList}
                />
              ) : (
                <div className="flex items-center pl-6 mt-2">
                  <TextIcon className="stroke-slate-400" />
                  <input
                    type="text"
                    value={questionTypeLabels[questionType]}
                    className="ml-4 bg-transparent outline-none text-slate-400"
                    readOnly
                  />
                </div>
              )}
            </section>
          </>
        )}
      </>
    </div>
  );
};

export default QuestionBlock;
