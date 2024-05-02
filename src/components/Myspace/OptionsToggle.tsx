import { useState, useEffect } from 'react';

interface StateProps {
  toggleState: {
    privacy: boolean;
    required: boolean;
  };
  handleToggle: (type: 'privacy' | 'required') => void;
  selectedQuestionId: string;
}

const OptionsToggle = ({
  toggleState,
  handleToggle,
  selectedQuestionId,
}: StateProps) => {
  const [localToggleState, setLocalToggleState] = useState({
    privacy: toggleState.privacy,
    required: toggleState.required,
  });

  useEffect(() => {
    setLocalToggleState({
      privacy: true,
      required: false,
    });
  }, [selectedQuestionId]);

  const toggleHandler = (type: 'privacy' | 'required') => {
    setLocalToggleState((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
    handleToggle(type);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 개인정보 */}
      <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
        <span
          className={`text-xs font-bold ${
            localToggleState.privacy ? 'text-blue-300' : 'text-neutral-400'
          }`}
        >
          개인정보
          <span className="ml-1 text-orange-400">&#9432;</span>
        </span>
        <div>
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={localToggleState.privacy}
            onChange={() => toggleHandler('privacy')}
          />
          <div className="toggle-btn"></div>
        </div>
      </label>
      {/* 필수응답 */}
      <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
        <span
          className={`text-xs font-bold ${
            localToggleState.required ? 'text-blue-300' : 'text-neutral-400'
          }`}
        >
          필수응답
          <span className="ml-1 text-orange-400">&#9432;</span>
        </span>
        <div>
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={localToggleState.required}
            onChange={() => toggleHandler('required')}
          />
          <div className="toggle-btn"></div>
        </div>
      </label>
    </div>
  );
};

export default OptionsToggle;
