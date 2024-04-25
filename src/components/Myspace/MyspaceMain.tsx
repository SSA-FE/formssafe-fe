import {
  useFetchRegisteredSurveysQuery,
  useFetchParticipatedSurveysQuery,
} from '@/api/activityApi';
import Toolbar from '@/components/Myspace/toolbar/Toolbar';
import SurveyCard from '@/components/Myspace/SurveyCard';
import { Survey } from '@/api/activityApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const MyspaceMain = ({ surveyStatus }: { surveyStatus: string }) => {
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

  const { data: SurveyList, isLoading } = selectedQuery;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen bg-neutral-100 ">
      <Toolbar />
      <div className="flex flex-wrap gap-4 mx-8 mb-4">
        {SurveyList &&
          Array.isArray(SurveyList) &&
          SurveyList.map((survey: Survey) => (
            <SurveyCard key={survey.id} {...survey} />
          ))}
      </div>
    </div>
  );
};

export default MyspaceMain;
