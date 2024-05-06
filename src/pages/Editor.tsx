import { useState } from 'react';
import FormInfoBar from '@/components/Myspace/FormInfoBar';
import FormMain from '@/components/Myspace/FormMain';
import FormOptionBar from '@/components/Myspace/FormOptionBar';
import FormToolBar from '@/components/Myspace/FormToolBar';
import { questionType } from '@/types/questionTypes';

const Editor = () => {
  const [selectedQuestionType, setSelectedQuestionType] =
    useState<questionType>('single');

  const handleQuestionTypeSelected = (type: string) => {
    setSelectedQuestionType(type as questionType);
  };

  return (
    <div>
      <FormToolBar />
      <div className="flex bg-white">
        <FormInfoBar />
        <FormMain selectedQuestionType={selectedQuestionType} />
        <FormOptionBar setSelectedQuestionType={handleQuestionTypeSelected} />
      </div>
    </div>
  );
};

export default Editor;
