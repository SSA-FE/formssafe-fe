import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { questionType } from '@components/Myspace/questionBlock/QuestionBlock';
import SingleIcon from '@/assets/icons/option-single-icon.svg?react';
import CheckboxIcon from '@/assets/icons/option-checkbox-icon.svg?react';
import DropdownIcon from '@/assets/icons/option-dropdown-icon.svg?react';
import TextIcon from '@/assets/icons/option-text-icon.svg?react';
import SentenceIcon from '@/assets/icons/option-sentence-icon.svg?react';

const QuestionOptions = () => {
  const dispatch = useDispatch();
  const [questionTypeIcons] = useState<{ [key in questionType]: JSX.Element }>({
    single: <SingleIcon />,
    checkbox: <CheckboxIcon />,
    dropdown: <DropdownIcon />,
    text: <TextIcon />,
    long: <SentenceIcon />,
    short: <SentenceIcon />,
  });

  const addQuestion = (type: questionType) => {
    const newQuestion = {
      //   id: uuidv4(),
      type,
      isRequired: true,
      isPrivacy: false,
    };
    dispatch({ type: 'questionBlockList/addQuestion', payload: newQuestion });
  };

  return (
    <div className="flex flex-col w-full px-4 pt-4 pb-8 border-b-4 gap-xs border-slate-50">
      <h2 className="text-xs font-bold text-slate-500">새 블록</h2>{' '}
      <div className="flex">
        {Object.keys(questionTypeIcons).map((type) => (
          <button key={type} onClick={() => addQuestion(type as questionType)}>
            {questionTypeIcons[type as questionType]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionOptions;
