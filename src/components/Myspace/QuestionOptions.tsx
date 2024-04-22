import SingleIcon from '@/assets/icons/option-single-icon.svg?react';
import CheckboxIcon from '@/assets/icons/option-checkbox-icon.svg?react';
import DropdownIcon from '@/assets/icons/option-dropdown-icon.svg?react';
import TextIcon from '@/assets/icons/option-text-icon.svg?react';
import SentenceIcon from '@/assets/icons/option-sentence-icon.svg?react';

const QuestionOptions = () => {
  return (
    <div className="flex flex-col w-full px-4 pt-4 pb-8 border-b-4 gap-xs border-slate-50">
      <h2 className="text-xs font-bold text-slate-500">새 블록</h2>
      <div className="flex">
        <button>
          <SingleIcon />
        </button>
        <button>
          <CheckboxIcon />
        </button>
        <button>
          <DropdownIcon />
        </button>
        <button>
          <TextIcon />
        </button>
        <button>
          <SentenceIcon />
        </button>
      </div>
    </div>
  );
};
export default QuestionOptions;
