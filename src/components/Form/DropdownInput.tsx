import { Content } from '@/pages/Form';
import { UseFormRegister } from 'react-hook-form';

// TODO:form 제출 field interface 정해지면 any적용
interface DropdownInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  questionData: Content;
}

// TODO: 커스텀 드롭다운으로 변경
const DropdownInput = ({ register, questionData }: DropdownInputProps) => {
  const options = questionData.options;
  return (
    <select
      {...register('selectedOption')}
      className="appearance-none p-2 border-2 rounded-lg focus:outline-slate-400"
    >
      <option value="none">선택하세요.</option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
export default DropdownInput;
