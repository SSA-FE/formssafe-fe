import MyspacePanel from '@/components/Myspace/MyspacePanel';
import MyspaceMain from '@/components/Myspace/MyspaceMain';
import { useState } from 'react';

const Myspace = () => {
  const [surveyStatus, setSurveyStatus] = useState('mySurveys');
  return (
    <div className="w-full h-screen bg-neutral-100 ">
      <MyspacePanel />
      <MyspaceMain
        setSurveyStatus={setSurveyStatus}
        surveyStatus={surveyStatus}
      />
    </div>
  );
};

export default Myspace;
