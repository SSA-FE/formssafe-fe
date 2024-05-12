import { Content } from '@/api/viewApi';
import { useFormContext } from 'react-hook-form';

interface MultiOptionInputProps {
  type: 'single' | 'checkbox';
  questionData: Content;
}

const MultiOptionInput = ({ type, questionData }: MultiOptionInputProps) => {
  const options = questionData.options;
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      {options?.map((option) => (
        <div
          key={option.id}
          className="flex px-4 py-2 gap-4 items-center rounded-lg hover:bg-slate-100"
        >
          <div className="flex items-center">
            <input
              {...register(`${questionData.type}-${questionData.id}`)}
              type={type === 'single' ? 'radio' : 'checkbox'}
              id={`option-${questionData.id}-${option.id}`}
              value={option.id}
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
