import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateQuestion } from '../questionBlockList/questionBlockListSlice';
import { useState } from 'react';

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

export type option = {
  id: string;
  value: string;
};

interface QuestionBlockProps {
  questionId: string;
  questionType: questionType;
}

interface QuestionBlockInputs {
  title: string;
  description?: string;
  [key: `option${string}`]: string;
}

const QuestionBlock = ({ questionType, questionId }: QuestionBlockProps) => {
  const { register, handleSubmit } = useForm<QuestionBlockInputs>();
  const [optionList, setOptionList] = useState<option[]>([]);
  const dispatch = useDispatch();

  // 블러하면 해당블럭의 전체 필드 상태 업데이트하기
  const handleUpdateBlockData: SubmitHandler<QuestionBlockInputs> = (data) => {
    // TODO: 객관식 주관식 구별
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

  const handleAddOption = () => {
    const optionId = crypto.randomUUID();
    setOptionList([...optionList, { id: optionId, value: '' }]);
  };

  const handleUpdateOption = (optionId: string, value: string) => {
    const index = optionList.findIndex((option) => option.id === optionId);
    if (index !== -1) {
      const newOptionList = [
        ...optionList.slice(0, index),
        { id: optionId, value: value },
        ...optionList.slice(index + 1),
      ];
      setOptionList(newOptionList);
    }
  };

  return (
    <div
      onBlur={handleSubmit(handleUpdateBlockData)}
      className="group relative w-full bg-neutral-100 rounded-lg"
    >
      <button
        type="button"
        className="invisible group-hover:visible flex absolute right-2 top-2 justify-center items-center w-6 h-6 text-neutral-300 text-xs font-bold p-2 rounded-lg border border-neutral-300  hover:bg-neutral-200"
      >
        ⸬
      </button>
      <header className="flex flex-col gap-1 p-5 pb-2">
        <p className="text-neutral-500 text-xs">
          {questionTypeLabels[questionType]}
        </p>
        <input
          {...register('title')}
          placeholder="질문을 입력해주세요."
          className="text-neutral-500 text-lg w-full bg-transparent hover:text-neutral-600 outline-none"
        />
        <input
          {...register('description')}
          placeholder="질문에 대해 추가로 필요한 설명이나 제한사항을 입력하세요."
          className="text-neutral-400 text-sm w-full bg-transparent outline-none"
        />
      </header>
      <section className="">
        {/* 객관식 */}
        <div>
          <div className="flex flex-col gap-2">
            {optionList.map((option) => (
              <input
                key={option.id}
                {...register(`option${option.id}`)}
                type="text"
                onChange={(e) => handleUpdateOption(option.id, e.target.value)}
                autoFocus
              />
            ))}
          </div>
          <input type="button" value="옵션 추가" onClick={handleAddOption} />
        </div>
        {/* 주관식 */}
        <div>
          <input type="text" value="장문형 텍스트" readOnly />
        </div>
      </section>
    </div>
  );
};

export default QuestionBlock;
