import { useState } from 'react';
import FormMain from '@/components/Myspace/FormMain';
import FormOptionBar from '@/components/Myspace/FormOptionBar';
import FormToolBar from '@/components/Myspace/FormToolBar';
import { questionType } from '@/types/questionTypes';
import FormInfoBar from '@/components/Myspace/formInfoBar/FormInfoBar';
import { useParams } from 'react-router-dom';
import { useFetchTempFormQuery } from '@/api/formApi';
import Loading from '@/components/Loading';
import { setTempQuestions } from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import { useDispatch } from 'react-redux';

const Editor = () => {
  const { formId } = useParams<{ formId: string }>();
  const dispatch = useDispatch();
  const [selectedQuestionType, setSelectedQuestionType] =
    useState<questionType>('single');

  const handleQuestionTypeSelected = (type: string) => {
    setSelectedQuestionType(type as questionType);
  };

  const { data: tempForm, isLoading } = useFetchTempFormQuery(
    formId as string,
    { skip: !formId }
  );

  if (tempForm) {
    dispatch(setTempQuestions(tempForm.contents));
  }

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-2 bg-slate-50">
      <FormToolBar />
      <div className="flex gap-2">
        <FormInfoBar tempForm={tempForm} />
        <FormMain selectedQuestionType={selectedQuestionType} />
        <FormOptionBar setSelectedQuestionType={handleQuestionTypeSelected} />
      </div>
    </div>
  );
};

export default Editor;
