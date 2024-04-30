import { useState } from 'react';

import FormInfoBar from '@/components/Myspace/FormInfoBar';
import FormMain from '@/components/Myspace/FormMain';
import FormOptionBar from '@/components/Myspace/FormOptionBar';
import FormToolBar from '@/components/Myspace/FormToolBar';
import { questionType } from '@/types/questionTypes';

const Editor = () => {
  const [selectedQuestionType, setSelectedQuestionType] =
    useState<questionType>('single');

  return (
    <div>
      <FormToolBar />
      <div className="flex bg-white">
        <FormInfoBar />
        <FormMain selectedQuestionType={selectedQuestionType} />
        <FormOptionBar
          selectedQuestionId={selectedQuestionType}
          setSelectedQuestionType={
            setSelectedQuestionType as (type: string) => void
          }
        />
      </div>
    </div>
  );
};

export default Editor;
