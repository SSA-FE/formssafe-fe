import { Content } from '@/api/viewApi';
import { useFormContext } from 'react-hook-form';

interface DropdownInputProps {
  questionData: Content;
}

// TODO: 커스텀 드롭다운으로 변경
const DropdownInput = ({ questionData }: DropdownInputProps) => {
  const options = questionData.options;
  const { register } = useFormContext();
  return (
    <select
      {...register(`${questionData.type}-${questionData.id}`)}
      className="appearance-none p-2 border-2 rounded-lg focus:outline-slate-400"
    >
      <option value="none">선택하세요.</option>
      {options?.map((option) => (
        <option
          key={`option-${questionData.id}-${option.id}`}
          value={option.id}
        >
          {option.detail}
        </option>
      ))}
    </select>
  );
};
export default DropdownInput;
