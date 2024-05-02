import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetInput } from './toolbar/toolbarInputSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';

interface MyspacePanelProps {
  setSurveyStatus: (value: string) => void;
}

const MyspacePanel = ({ setSurveyStatus }: MyspacePanelProps) => {
  const [activeTap, setActiveTap] = useState('보관함');
  const dispatch = useAppDispatch();

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
          className={`px-6 py-2 ${activeTap === '보관함' ? 'border-b-2 border-neutral-800 ' : 'text-neutral-400 border-none'}`}
          onClick={() => {
            setActiveTap('보관함');
            setSurveyStatus('mySurveys');
            dispatch(resetInput());
          }}
        >
          보관함
        </button>
        <button
          className={`px-6 py-2 ${activeTap === '참여한 설문' ? 'border-b-2  border-neutral-800 ' : 'text-neutral-400 border-none'}`}
          onClick={() => {
            setActiveTap('참여한 설문');
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
