import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  setDescription,
  setTitle,
} from '@/components/Myspace/questionBlockForm/questionBlockFormSlice';
import { addQuestion } from '../questionBlockList/questionBlockListSlice';

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

interface QuestionBlockFormProps {
  children: ReactNode;
  questionType: questionType;
}

interface QuestionBlockFormInputs {
  title: string;
  description?: string;
}

const QuestionBlockForm = ({
  children,
  questionType,
}: QuestionBlockFormProps) => {
  const { register } = useForm<QuestionBlockFormInputs>();
  const dispatch = useDispatch();

  const handleSaveInputData = (name: string, value: string) => {
    if (name === 'title') {
      dispatch(setTitle(value));
    } else if (name === 'description') {
      dispatch(setDescription(value));
    }
  };

  const handleSaveBlockData = () => {
    // 블럭에 값저장하고
    dispatch(setTitle(value));
    dispatch(setDescription(value));

    // 그거 다시 불러와서 리스트에 저장?;;;;;; -> addQuestion
    dispatch(addQuestion());
  };

  return (
    <div
      onBlur={handleSaveBlockData}
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
          {...register('title', { required: true })}
          placeholder="질문을 입력해주세요."
          className="text-neutral-500 text-lg w-full bg-transparent hover:text-neutral-600 outline-none"
          onBlur={(e) => handleSaveInputData('title', e.target.value)}
        />
        <input
          {...register('description')}
          placeholder="질문에 대해 추가로 필요한 설명이나 제한사항을 입력하세요."
          className="text-neutral-400 text-sm w-full bg-transparent outline-none"
          onBlur={(e) => handleSaveInputData('description', e.target.value)}
        />
      </header>
      <section className="p-2 pb-5">{children}</section>
    </div>
  );
};

export default QuestionBlockForm;
