import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  setDescription,
  setTitle,
} from '@/components/Myspace/questionBlock/questionBlockSlice';
import { updateQuestion } from '../questionBlockList/questionBlockListSlice';

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
  options?: option[];
}

interface QuestionBlockInputs {
  title: string;
  description?: string;
}

const QuestionBlock = ({
  questionType,
  questionId,
  options,
}: QuestionBlockProps) => {
  const { register, handleSubmit } = useForm<QuestionBlockInputs>();
  const dispatch = useDispatch();

  const handleSetInputData = (name: string, value: string) => {
    if (name === 'title') {
      dispatch(setTitle(value));
    } else if (name === 'description') {
      dispatch(setDescription(value));
    }
  };

  // 블러하면 해당블럭의 전체 필드 상태 업데이트하기
  const handleUpdateBlockData = (data) => {
    // TODO: 객관식 주관식 구별
    dispatch(
      updateQuestion({
        id: questionId,
        type: questionType,
        title: data.title,
        description: data.description,
        options: [],
        isRequired: true,
        isPrivacy: false,
      })
    );
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
          {...register('title', { required: true })}
          placeholder="질문을 입력해주세요."
          className="text-neutral-500 text-lg w-full bg-transparent hover:text-neutral-600 outline-none"
          onBlur={(e) => handleSetInputData('title', e.target.value)}
        />
        <input
          {...register('description')}
          placeholder="질문에 대해 추가로 필요한 설명이나 제한사항을 입력하세요."
          className="text-neutral-400 text-sm w-full bg-transparent outline-none"
          onBlur={(e) => handleSetInputData('description', e.target.value)}
        />
      </header>
      <section className="p-2 pb-5 flex flex-col">
        {options?.map((option) => (
          <input className="bg-transparent" type="text" value={option.value} />
        ))}
      </section>
    </div>
  );
};

export default QuestionBlock;
