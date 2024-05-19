import { useFetchSurveyDetailQuery } from '@/api/viewApi';
import FormBody from '@/components/Form/FormBody';
import FormHeader from '@/components/Form/FormHeader';
import Loading from '@/components/Loading';
import { useParams } from 'react-router-dom';
import defaultImg from '@assets/images/dafaultImg.jpg';

const Form = () => {
  const { id } = useParams<{ id: string }>();
  const surveyId = Number(id);
  const { data: survey, isLoading } = useFetchSurveyDetailQuery(surveyId);
  if (isLoading || !survey) return <Loading />;

  return (
    <div className="min-h-screen bg-slate-100">
      {survey.image && survey.image[0] ? (
        <img
          src={survey.image[0]}
          alt="thumbnail"
          className="object-cover w-full h-24"
        />
      ) : (
        <img
          src={defaultImg}
          alt="thumbnail"
          className="object-cover w-full h-24"
        />
      )}

      <div className="max-w-[832px] flex flex-col gap-2 mx-auto">
        <FormHeader formData={survey} />
        <FormBody surveyId={surveyId} questions={survey.contents} />
      </div>
    </div>
  );
};

export default Form;
