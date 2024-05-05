import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  setActiveBlockId,
  updateQuestion,
} from '../questionBlockList/questionBlockListSlice';
import OptionList from './OptionList';
import TextIcon from '@/assets/icons/text-icon.svg?react';
import { DraggableProvided } from 'react-beautiful-dnd';
import TextBlock from './TextBlock';
import {
  questionBlock,
  Option,
  questionTypeLabels,
} from '@/types/questionTypes';

interface QuestionBlockProps {
  questionData: questionBlock;
  dragHandler: DraggableProvided['dragHandleProps'];
}

export interface QuestionBlockInputs {
  title: string;
  description?: string;
}

const QuestionBlock = ({ questionData, dragHandler }: QuestionBlockProps) => {
  const { register, handleSubmit } = useForm<QuestionBlockInputs>();
  const [optionList, setOptionList] = useState<Option[]>([]);
  const dispatch = useDispatch();

  const handleUpdateBlockData: SubmitHandler<QuestionBlockInputs> = (data) => {
    dispatch(
      updateQuestion({
        id: questionData.id,
        type: questionData.type,
        title: data.title,
        description: data.description,
        options: optionList,
        isRequired: questionData.isRequired,
        isPrivacy: questionData.isPrivacy,
      })
    );
    console.log('Question Data:', questionData);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onBlur={handleSubmit(handleUpdateBlockData)}
      onClick={() => {
        dispatch(setActiveBlockId({ id: questionData.id }));
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          dispatch(setActiveBlockId({ id: questionData.id }));
        }
      }}
      className="relative w-full p-6 bg-white border border-transparent rounded-lg group/block hover:bg-slate-50 focus-within:bg-slate-50 focus-within:border-slate-200"
    >
      <div
        {...dragHandler}
        className="absolute flex items-center justify-center invisible w-6 h-6 p-2 text-sm font-bold group-hover/block:visible right-2 top-2 text-neutral-400"
      >
        ⸬
      </div>

      <p className="mb-1 text-xs font-bold text-slate-500">
        {questionTypeLabels[questionData.type]}
      </p>
      <>
        {questionData.type === 'text' ? (
          <TextBlock register={register} />
        ) : (
          <>
            <header className="flex flex-col gap-1 pb-2 text-slate-500">
              <input
                {...register('title')}
                placeholder="질문을 입력해주세요."
                className="w-full text-lg bg-transparent border-b outline-none hover:bg-slate-100 border-b-transparent focus:border-slate-300 focus:bg-slate-100 border-slate-300 placeholder:text-slate-400"
              />
              <input
                {...register('description')}
                placeholder="질문에 대해 추가로 필요한 설명이나 제한사항을 입력하세요."
                className="w-full bg-transparent border-b outline-none border-b-transparent hover:bg-slate-100 focus:border-slate-300 focus:bg-slate-100 border-slate-300 placeholder:text-slate-400"
              />
            </header>
            <section className="py-1 mb-4 text-slate-500">
              {questionData.type === 'single' ||
              questionData.type === 'checkbox' ||
              questionData.type === 'dropdown' ? (
                <OptionList
                  questionType={questionData.type}
                  optionList={optionList}
                  setOptionList={setOptionList}
                />
              ) : (
                <div className="flex items-center pl-6 mt-2">
                  <TextIcon className="stroke-slate-400" />
                  <input
                    type="text"
                    value={questionTypeLabels[questionData.type]}
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
