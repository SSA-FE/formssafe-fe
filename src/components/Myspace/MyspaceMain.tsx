import {
  useFetchRegisteredSurveysQuery,
  useFetchParticipatedSurveysQuery,
} from '@/api/activityApi';
import FormCard from '@/components/Myspace/FormCard';
import { Form } from '@/api/activityApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { resetInput } from './toolbar/toolbarInputSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';

interface MyspaceMainProps {
  surveyStatus: string;
  setSurveyStatus: (value: string) => void;
}

const MyspaceMain = ({ surveyStatus, setSurveyStatus }: MyspaceMainProps) => {
  const [activeTap, setActiveTap] = useState('보관함');
  const dispatch = useAppDispatch();
  const [FormList, setFormList] = useState<Form[] | null>(null);
  const toolbarInput = useSelector((state: RootState) => state.toolbarInput);
  const registeredSurveysQuery = useFetchRegisteredSurveysQuery(toolbarInput);
  const participatedSurveysQuery =
    useFetchParticipatedSurveysQuery(toolbarInput);

  const [selectedQuery, setSelectedQuery] = useState(registeredSurveysQuery);

  useEffect(() => {
    setSelectedQuery(
      surveyStatus === 'mySurveys'
        ? registeredSurveysQuery
        : participatedSurveysQuery
    );
  }, [surveyStatus, registeredSurveysQuery, participatedSurveysQuery]);

  const { data, isLoading } = selectedQuery;

  useEffect(() => {
    if (data) {
      setFormList(data.forms);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex pl-8 space-x-4 text-sm font-bold bg-transparent bg-white border-b border-slate-200">
        <button
          className={`px-6 py-2 whitespace-nowrap ${activeTap === '등록한 설문' ? 'text-blue-400 border-b-2 border-blue-400 ' : 'text-neutral-400 border-b-2 border-neutral-400'}`}
          onClick={() => {
            setActiveTap('등록한 설문');
            setSurveyStatus('mySurveys');
            dispatch(resetInput());
          }}
        >
          등록한 설문
        </button>
        <button
          className={`px-6 py-2 whitespace-nowrap ${activeTap === '참여한 설문' ? 'text-blue-400 border-b-2 border-blue-400 ' : 'text-neutral-400 border-b-2 border-neutral-400'}`}
          onClick={() => {
            setActiveTap('참여한 설문');
            setSurveyStatus('participatedSurveys');
            dispatch(resetInput());
          }}
        >
          참여한 설문
        </button>
      </div>
      <div className="w-full min-h-screen p-4 bg-slate-50">
        <div className="flex flex-wrap gap-4">
          {FormList &&
            Array.isArray(FormList) &&
            FormList.map((form: Form) => <FormCard key={form.id} {...form} />)}
        </div>
      </div>
    </>
  );
};

export default MyspaceMain;
