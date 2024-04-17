import { useState } from 'react';

interface MyspacePanelProps {
  setSurveyStatus: (value: string) => void;
}

const MyspacePanel = ({ setSurveyStatus }: MyspacePanelProps) => {
  const [activeButton, setActiveButton] = useState('보관함');

  return (
    <div className="flex flex-col px-8 items-start space-y-2 border-b-[1px] bg-white">
      <button className="box-border px-5 py-2 text-sm text-white font-bold rounded bg-neutral-800">
        새 설문 만들기
      </button>
      <div className="flex bg-transparent border-none space-x-4 font-bold">
        <button
          className={`px-6 py-2 ${activeButton === '보관함' ? 'border-b-2 border-neutral-800 ' : 'text-neutral-400 border-none'}`}
          onClick={() => {
            setActiveButton('보관함');
            setSurveyStatus('mySurveys');
          }}
        >
          보관함
        </button>
        <button
          className={`px-6 py-2 ${activeButton === '참여한 설문' ? 'border-b-2  border-neutral-800 ' : 'text-neutral-400 border-none'}`}
          onClick={() => {
            setActiveButton('참여한 설문');
            setSurveyStatus('participatedSurveys');
          }}
        >
          참여한 설문
        </button>
      </div>
    </div>
  );
};

export default MyspacePanel;
