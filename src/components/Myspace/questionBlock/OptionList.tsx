import SingleIcon from '@/assets/icons/option-prefix-single.svg?react';
import CheckboxIcon from '@/assets/icons/option-prefix-checkbox.svg?react';
import DropdownIcon from '@/assets/icons/option-prefix-dropdown.svg?react';
import { Option } from '@/types/questionTypes';

const questionTypeIcons = {
  single: <SingleIcon />,
  checkbox: <CheckboxIcon />,
  dropdown: <DropdownIcon />,
};

type OptionQuestionType = 'single' | 'checkbox' | 'dropdown';

interface OptionListProps {
  questionType: OptionQuestionType;
  optionList: Option[];
  setOptionList: React.Dispatch<React.SetStateAction<Option[]>>;
}

const OptionList = ({
  questionType,
  optionList,
  setOptionList,
}: OptionListProps) => {
  const handleAddOption = () => {
    const optionId = crypto.randomUUID();
    setOptionList([...optionList, { id: optionId, detail: '' }]);
  };

  const handleUpdateOption = (optionId: string, value: string) => {
    const newOptionList = optionList.map((option) =>
      option.id === optionId ? { id: optionId, detail: value } : option
    );
    setOptionList(newOptionList);
  };

  const handleRemoveOption = (optionId: string) => {
    const newOptionList = optionList.filter((option) => option.id !== optionId);
    setOptionList(newOptionList);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        {optionList.map((option, idx) => (
          <div
            key={option.id}
            className="flex items-center py-1 pl-6 border-l-2 group/input border-l-transparent hover:border-l-slate-200 focus-within:border-l-slate-200 hover:bg-slate-100 focus-within:bg-slate-100"
          >
            <div className="w-4 h-4 mr-3">
              {questionTypeIcons[questionType]}
            </div>
            <input
              type="text"
              defaultValue={option.detail}
              placeholder={`옵션 ${idx + 1}`}
              onChange={(e) => handleUpdateOption(option.id, e.target.value)}
              autoFocus
              className="w-full px-2 py-1 bg-transparent outline-none focus:bg-slate-50 placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => handleRemoveOption(option.id)}
              className="invisible p-2 mx-2 text-sm text-slate-300 group-hover/input:visible"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center py-1 pl-6 mt-2 border-l-2 border-l-transparent">
        <div className="w-4 h-4 mr-3">{questionTypeIcons[questionType]}</div>
        <input
          type="button"
          value="옵션 추가"
          onClick={handleAddOption}
          className="px-2 py-1 text-left bg-transparent border-b border-transparent text-slate-400 placeholder:text-slate-400 hover:border-slate-200"
        />
      </div>
    </>
  );
};

export default OptionList;
