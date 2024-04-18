import { useFetchRegisteredSurveysQuery } from '@/api/activityApi';
import SurveyCard from '@/components/Myspace/SurveyCard';
import Toolbar from '@/components/Myspace/Toolbar';
import { Survey } from '@/api/activityApi';

const Myspace = () => {
  const { data: MySurveyList, isLoading } = useFetchRegisteredSurveysQuery();
  console.log(MySurveyList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Toolbar />
      <div className="flex flex-wrap">
        {MySurveyList &&
          Array.isArray(MySurveyList) &&
          MySurveyList.map((survey: Survey) => (
            <SurveyCard key={survey.id} {...survey} />
          ))}
      </div>
    </>
  );
};

export default Myspace;
