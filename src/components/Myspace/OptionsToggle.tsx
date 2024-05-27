import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateQuestionPrivacy,
  updateQuestionRequired,
  setActiveBlockId,
} from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import { RootState } from '@/store';

interface OptionsToggleProps {
  selectedQuestionId: string;
}

const OptionsToggle = ({ selectedQuestionId }: OptionsToggleProps) => {
  const dispatch = useDispatch();
  const question = useSelector((state: RootState) =>
    state.questionBlockList.questionList.find(
      (q) => q.id === selectedQuestionId
    )
  );

  const [localToggleState, setLocalToggleState] = useState({
    privacy: question?.privacy || false,
    required: question?.required || false,
  });

  useEffect(() => {
    if (question) {
      setLocalToggleState({
        privacy: question.privacy,
        required: question.required,
      });
    }
  }, [selectedQuestionId, question]);

  const toggleHandler = (type: 'privacy' | 'required') => {
    const updatedState = {
      ...localToggleState,
      [type]: !localToggleState[type],
    };
    setLocalToggleState(updatedState);

    if (type === 'privacy') {
      dispatch(
        updateQuestionPrivacy({
          id: selectedQuestionId,
          privacy: updatedState.privacy,
        })
      );
    } else if (type === 'required') {
      dispatch(
        updateQuestionRequired({
          id: selectedQuestionId,
          required: updatedState.required,
        })
      );
    }

    dispatch(setActiveBlockId({ id: selectedQuestionId }));
  };

  return (
    <div className="flex flex-col w-full">
      {/* 개인정보 */}
      <label className="flex items-center justify-between h-12 p-4 cursor-pointer">
        <span
          className={`text-xs font-bold ${
            localToggleState.privacy ? 'text-blue-400' : 'text-neutral-400'
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
            localToggleState.required ? 'text-blue-400' : 'text-neutral-400'
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
