import {
  Form,
  useFetchParticipatedSurveysQuery,
  useFetchRegisteredSurveysQuery,
} from '@api/activityApi';
import { useEffect, useState } from 'react';
import { ListIcon } from '@/assets/icons';

interface MyspaceSidebarProps {
  activeTap: string;
  setActiveTap: (value: string) => void;
  selectedSurvey: number | undefined;
  setSelectedSurvey: (value: number) => void;
}

const MyspaceSidebar = ({
  activeTap,
  setActiveTap,
  selectedSurvey,
  setSelectedSurvey,
}: MyspaceSidebarProps) => {
  const [registeredSurveyList, setRegisteredSurveyList] = useState<
    Form[] | null
  >(null);
  const [participatedSurveyList, setParticipatedSurveyList] = useState<
    Form[] | null
  >(null);

  const registeredSurveysQuery = useFetchRegisteredSurveysQuery({});
  const participatedSurveysQuery = useFetchParticipatedSurveysQuery({});

  useEffect(() => {
    if (registeredSurveysQuery.data) {
      setRegisteredSurveyList(registeredSurveysQuery.data.forms);
    }
    if (participatedSurveysQuery.data) {
      setParticipatedSurveyList(participatedSurveysQuery.data.forms);
    }
  }, [registeredSurveysQuery.data, participatedSurveysQuery.data]);

  const handleRegisteredTabClick = (survey: Form) => {
    if (activeTap === '참여한 설문') setActiveTap('등록한 설문');
    if (survey.id === selectedSurvey) {
      setSelectedSurvey(-1);
    } else {
      setSelectedSurvey(survey.id);
    }
  };

  const handleParticipatedTabClick = (survey: Form) => {
    if (activeTap === '등록한 설문') setActiveTap('참여한 설문');
    if (survey.id === selectedSurvey) {
      setSelectedSurvey(-1);
    } else {
      setSelectedSurvey(survey.id);
    }
  };

  return (
    <div className="w-[300px] p-1 bg-slate-100 border-t-[2px] border-r-[2px] border-slate-200 flex flex-col gap-2">
      <div className="border border-slate-200">
        <div className="flex items-center w-full h-10 px-4 text-sm font-bold bg-white border-b-[1px] border-slate-200 text-slate-800">
          <ListIcon width="20" />
          <p className="ml-2">등록한 설문목록</p>
        </div>
        {registeredSurveyList && registeredSurveyList.length === 0 ? (
          <div className="flex items-center w-full h-10 px-4 text-sm bg-white text-slate-400">
            <div>등록한 설문이 없습니다.</div>
          </div>
        ) : (
          registeredSurveyList &&
          registeredSurveyList.map((survey, idx) => (
            <button
              key={survey.id}
              className={`flex items-center w-full h-10 px-4 text-sm  text-slate-400 ${selectedSurvey === survey.id ? 'bg-blue-100 hover:bg-blue-100' : 'bg-white hover:bg-blue-50'} ${idx < registeredSurveyList.length - 1 ? 'border-b-[1px] border-slate-200' : ''}`}
              onClick={() => handleRegisteredTabClick(survey)}
            >
              <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                {survey.title}
              </div>
            </button>
          ))
        )}
      </div>
      <div className="border border-slate-200">
        <div className="flex items-center w-full h-10 px-4 text-sm font-bold bg-white border-b-[1px] border-slate-200 text-slate-800">
          <ListIcon width="20" />
          <p className="ml-2">참여한 설문목록</p>
        </div>
        {participatedSurveyList && participatedSurveyList.length === 0 ? (
          <div className="flex items-center w-full h-10 px-4 text-sm bg-white text-slate-400">
            <div>참여한 설문이 없습니다.</div>
          </div>
        ) : (
          participatedSurveyList &&
          participatedSurveyList.map((survey, idx) => (
            <button
              key={survey.id}
              onClick={() => handleParticipatedTabClick(survey)}
              className={`flex items-center w-full h-10 px-4 text-sm text-slate-400 ${selectedSurvey === survey.id ? 'bg-blue-100 hover:bg-blue-100' : 'bg-white hover:bg-blue-50'} ${idx < participatedSurveyList.length - 1 ? 'border-b-[1px] border-slate-200' : ''}`}
            >
              <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                {survey.title}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default MyspaceSidebar;
