import { useState } from 'react';

const OptionsToggle = () => {
  const [toggleState, setToggleState] = useState({
    privacy: false,
    required: false,
  });

  const handleToggle = (type: 'privacy' | 'required') => {
    setToggleState((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  return (
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
  );
};

export default OptionsToggle;
