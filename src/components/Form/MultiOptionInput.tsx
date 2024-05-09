import { Content } from '@/api/viewApi';
import { UseFormRegister } from 'react-hook-form';

// TODO:form 제출 field interface 정해지면 any적용
interface MultiOptionInputProps {
  type: 'single' | 'checkbox';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  questionData: Content;
}

const MultiOptionInput = ({
  type,
  register,
  questionData,
}: MultiOptionInputProps) => {
  const options = questionData.options;
  return (
    <div className="flex flex-col gap-2">
      {options?.map((option) => (
        <div
          key={option.id}
          className="flex px-4 py-2 gap-4 items-center rounded-lg hover:bg-slate-100"
        >
          <div className="flex items-center">
            <input
              {...register('selectedOption')}
              type={type === 'single' ? 'radio' : 'checkbox'}
              id={`option-${questionData.id}-${option.id}`}
              value={option.detail}
              className={`appearance-none border-4 w-4 h-4 checked:border-slate-400 ${type === 'single' && 'rounded-full'}`}
            />
          </div>
          <label htmlFor={`option-${questionData.id}-${option.id}`}>
            {option.detail}
          </label>
        </div>
      ))}
    </div>
  );
};
export default MultiOptionInput;
