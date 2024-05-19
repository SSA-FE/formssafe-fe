import {
  useFetchRegisteredSurveysQuery,
  useFetchParticipatedSurveysQuery,
} from '@/api/activityApi';
import FormCard from '@/components/Myspace/FormCard';
import { Form } from '@/api/activityApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Loading from '@components/Loading';
import { resetInput } from './toolbar/toolbarInputSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import MyspaceSidebar from './MyspaceSidebar';
import { useLocation } from 'react-router-dom';

const MyspaceMain = () => {
  const [activeTap, setActiveTap] = useState('등록한 설문');
  const [selectedSurvey, setSelectedSurvey] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;
  const [formList, setFormList] = useState<Form[] | null>(null);
  const toolbarInput = useSelector((state: RootState) => state.toolbarInput);
  const registeredSurveysQuery = useFetchRegisteredSurveysQuery(toolbarInput);
  const participatedSurveysQuery =
    useFetchParticipatedSurveysQuery(toolbarInput);

  const [selectedQuery, setSelectedQuery] = useState(registeredSurveysQuery);

  useEffect(() => {
    setSelectedQuery(
      activeTap === '등록한 설문'
        ? registeredSurveysQuery
        : participatedSurveysQuery
    );
  }, [activeTap, registeredSurveysQuery, participatedSurveysQuery]);

  const { data, isLoading } = selectedQuery;

  useEffect(() => {
    if (data) {
      setFormList(data.forms);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex">
      <MyspaceSidebar
        activeTap={activeTap}
        setActiveTap={setActiveTap}
        selectedSurvey={selectedSurvey}
        setSelectedSurvey={setSelectedSurvey}
      />
      <div className="w-full">
        <div className="flex pl-8 space-x-4 text-sm font-bold bg-transparent bg-white border-b-[2px] border-t-[2px] border-slate-100">
          <button
            className={`px-6 py-2 whitespace-nowrap ${activeTap === '등록한 설문' ? 'text-blue-400 border-b-2 border-blue-400 ' : 'text-neutral-400 border-b-2 border-neutral-400'}`}
            onClick={() => {
              setActiveTap('등록한 설문');
              dispatch(resetInput());
            }}
          >
            등록한 설문
          </button>
          <button
            className={`px-6 py-2 whitespace-nowrap ${activeTap === '참여한 설문' ? 'text-blue-400 border-b-2 border-blue-400 ' : 'text-neutral-400 border-b-2 border-neutral-400'}`}
            onClick={() => {
              setActiveTap('참여한 설문');
              dispatch(resetInput());
            }}
          >
            참여한 설문
          </button>
        </div>
        <div className="w-full min-h-screen p-4 bg-slate-50">
          <div className="flex flex-wrap gap-4">
            {formList &&
              Array.isArray(formList) &&
              formList.map((form: Form) => (
                <FormCard
                  key={form.id}
                  to={`${form.id}`}
                  activeTap={activeTap}
                  path={path}
                  {...form}
                  selectedSurvey={selectedSurvey}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyspaceMain;
