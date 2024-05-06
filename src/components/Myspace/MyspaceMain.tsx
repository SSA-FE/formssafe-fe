import {
  useFetchRegisteredSurveysQuery,
  useFetchParticipatedSurveysQuery,
} from '@/api/activityApi';
import Toolbar from '@/components/Myspace/toolbar/Toolbar';
import FormCard from '@/components/Myspace/FormCard';
import { Form } from '@/api/activityApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Loading from '@components/Loading';

const MyspaceMain = ({ surveyStatus }: { surveyStatus: string }) => {
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

  if (isLoading) return <Loading />;

  return (
    <div className="w-full min-h-screen bg-neutral-100 ">
      <Toolbar />
      <div className="flex flex-wrap gap-4 mx-8 mb-4">
        {FormList &&
          Array.isArray(FormList) &&
          FormList.map((form: Form) => <FormCard key={form.id} {...form} />)}
      </div>
    </div>
  );
};

export default MyspaceMain;
