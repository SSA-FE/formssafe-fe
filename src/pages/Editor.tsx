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
    <div className="flex flex-col gap-2 bg-slate-50">
      <FormToolBar />
      <div className="flex gap-2">
        <FormInfoBar />
        <FormMain selectedQuestionType={selectedQuestionType} />
        <FormOptionBar setSelectedQuestionType={handleQuestionTypeSelected} />
      </div>
    </div>
  );
};

export default Editor;
