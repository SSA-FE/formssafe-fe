import { useState } from 'react';
import QuestionOptions from './QuestionOptions';

const FormOptionBar = ({
  setSelectedQuestionType,
}: {
  setSelectedQuestionType: (type: string) => void;
}) => {
  const [toggleState, setToggleState] = useState({
    privacy: false,
    required: false,
  });

  const handleToggle = (type: 'privacy' | 'required') => {
    setToggleState((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  const onQuestionTypeSelected = (type: string) => {
    setSelectedQuestionType(type);
  };

  return (
    <div className="w-[19rem] ml-auto h-[calc(100vh-8rem)] border border-neutral-200 bg-white rounded flex flex-col content-center self-stretch">
      {/* 질문 유형 */}
      <QuestionOptions
        setSelectedQuestionType={(type) =>
          setSelectedQuestionType(type as string)
        }
        onQuestionTypeSelected={onQuestionTypeSelected}
      />
      <div className="flex flex-col w-full">
        {/* 개인정보 */}
        <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
          <span
            className={`text-xs font-bold ${toggleState.privacy ? 'text-blue-300' : 'text-neutral-400'}`}
          >
            개인정보
            <span className="ml-1 text-orange-400">&#9432;</span>
          </span>
          <div>
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => handleToggle('privacy')}
            />
            <div className="toggle-btn"></div>
          </div>
        </label>
        {/* 필수응답 */}
        <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
          <span
            className={`text-xs font-bold ${toggleState.required ? 'text-blue-300' : 'text-neutral-400'}`}
          >
            필수응답
            <span className="ml-1 text-orange-400">&#9432;</span>
          </span>
          <div>
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => handleToggle('required')}
            />
            <div className="toggle-btn"></div>
          </div>
        </label>
      </div>

      {/* 삭제하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 border-t gap-xs border-slate-50">
        <button className="w-full text-sm font-bold text-red-500 bg-neutral-100 h-7">
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default FormOptionBar;
