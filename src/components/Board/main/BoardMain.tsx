import SurveyCard from '@/components/Myspace/SurveyCard';
import BoardToolbar from './BoardToolbar';
import { Survey } from '@/api/viewApi';

import { useFetchSurveyListQuery } from '@/api/viewApi';

const BoardMain = () => {
  const { data: SurveyList, isLoading } = useFetchSurveyListQuery({});
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen min-w-min mx-[100px] py-4 gap-4 ">
      <BoardToolbar />
      <div className="flex justify-center flex-wrap gap-4 px-8 pb-4">
        {SurveyList &&
          Array.isArray(SurveyList) &&
          SurveyList.map((survey: Survey) => (
            <SurveyCard key={survey.id} {...survey} />
          ))}
      </div>
    </div>
  );
};

export default BoardMain;
