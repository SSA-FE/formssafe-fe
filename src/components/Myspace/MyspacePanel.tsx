import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetInput } from './toolbar/toolbarInputSlice';
import { useDispatch } from 'react-redux';

interface MyspacePanelProps {
  setSurveyStatus: (value: string) => void;
}

const MyspacePanel = ({ setSurveyStatus }: MyspacePanelProps) => {
  const [activeButton, setActiveButton] = useState('보관함');
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col px-8 items-start space-y-2 border-b-[1px] bg-white">
      <Link
        to="/editor"
        className="box-border px-5 py-2 text-sm font-bold text-white bg-blue-400 rounded"
      >
        새 설문 만들기
      </Link>
      <div className="flex space-x-4 font-bold bg-transparent border-none">
        <button
          className={`px-6 py-2 ${activeButton === '보관함' ? 'border-b-2 border-neutral-800 ' : 'text-neutral-400 border-none'}`}
          onClick={() => {
            setActiveButton('보관함');
            setSurveyStatus('mySurveys');
            dispatch(resetInput());
          }}
        >
          보관함
        </button>
        <button
          className={`px-6 py-2 ${activeButton === '참여한 설문' ? 'border-b-2  border-neutral-800 ' : 'text-neutral-400 border-none'}`}
          onClick={() => {
            setActiveButton('참여한 설문');
            setSurveyStatus('participatedSurveys');
            dispatch(resetInput());
          }}
        >
          참여한 설문
        </button>
      </div>
    </div>
  );
};

export default MyspacePanel;
