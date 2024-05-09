import { useFetchSurveyDetailQuery } from '@/api/viewApi';
import FormBody from '@/components/Form/FormBody';
import FormHeader from '@/components/Form/FormHeader';
import Loading from '@/components/Loading';
import { useParams } from 'react-router-dom';

const Form = () => {
  const { id } = useParams<{ id: string }>();
  const surveyId = Number(id);
  const { data: survey, isLoading } = useFetchSurveyDetailQuery(surveyId);

  if (isLoading || !survey) return <Loading />;

  return (
    <div className="bg-slate-100 min-h-screen">
      <img
        src={survey.image && survey.image[0]}
        alt="thumbnail"
        className="w-full h-24 object-cover"
      />
      <div className="max-w-[832px] flex flex-col gap-2 mx-auto">
        <FormHeader formData={survey} />
        <FormBody questions={survey.contents} />
      </div>
    </div>
  );
};

export default Form;
