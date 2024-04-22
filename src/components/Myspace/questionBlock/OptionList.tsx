import SingleIcon from '@/assets/icons/option-prefix-single.svg?react';
import CheckboxIcon from '@/assets/icons/option-prefix-checkbox.svg?react';
import DropdownIcon from '@/assets/icons/option-prefix-dropdown.svg?react';

const questionTypeIcons = {
  single: <SingleIcon />,
  checkbox: <CheckboxIcon />,
  dropdown: <DropdownIcon />,
};

export type option = {
  id: string;
  value: string;
};

type OptionQuestionType = 'single' | 'checkbox' | 'dropdown';

interface OptionListProps {
  questionType: OptionQuestionType;
  optionList: option[];
  setOptionList: React.Dispatch<React.SetStateAction<option[]>>;
}

const OptionList = ({
  questionType,
  optionList,
  setOptionList,
}: OptionListProps) => {
  const handleAddOption = () => {
    const optionId = crypto.randomUUID();
    setOptionList([...optionList, { id: optionId, value: '' }]);
  };

  const handleUpdateOption = (optionId: string, value: string) => {
    const newOptionList = optionList.map((option) =>
      option.id === optionId ? { id: optionId, value: value } : option
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
            className="group/input flex items-center pl-6 py-1 border-l-2 border-l-transparent hover:border-l-slate-200 focus-within:border-l-slate-200 hover:bg-slate-100 focus-within:bg-slate-100"
          >
            <div className="w-4 h-4 mr-3">
              {questionTypeIcons[questionType]}
            </div>
            <input
              type="text"
              placeholder={`옵션 ${idx + 1}`}
              onChange={(e) => handleUpdateOption(option.id, e.target.value)}
              autoFocus
              className="outline-none bg-transparent w-full focus:bg-slate-50 px-2 py-1 placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => handleRemoveOption(option.id)}
              className="invisible text-slate-300 text-sm p-2 mx-2 group-hover/input:visible"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center pl-6 mt-2 py-1 border-l-2 border-l-transparent">
        <div className="w-4 h-4 mr-3">{questionTypeIcons[questionType]}</div>
        <input
          type="button"
          value="옵션 추가"
          onClick={handleAddOption}
          className="bg-transparent text-slate-400 text-left px-2 py-1 border-b placeholder:text-slate-400 border-transparent hover:border-slate-200"
        />
      </div>
    </>
  );
};

export default OptionList;
