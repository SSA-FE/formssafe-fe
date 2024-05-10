import AutoResizeTextarea from '../AutoResizeTextarea';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import DropdownInput from './DropdownInput';
import MultiOptionInput from './MultiOptionInput';
import DescriptionBlock from './DescriptionBlock';
import { Content } from '@/api/viewApi';
import { useFetchFormSubmissionMutation } from '@/api/submissionApi';
import { questionType } from '@/types/questionTypes';
import { useNavigate } from 'react-router-dom';

interface FormInputData {
  [key: string]: string | string[];
}

interface FormBodyProps {
  questions: Content[];
  surveyId: number;
}

const FormBody = ({ surveyId, questions }: FormBodyProps) => {
  const methods = useForm<FormInputData>();
  const navigate = useNavigate();
  const [submitForm] = useFetchFormSubmissionMutation();

  const renderResponseInput = (question: Content) => {
    switch (question.type) {
      case 'short':
      case 'long':
        return (
          <AutoResizeTextarea
            fieldName={`${question.type}-${question.id}`}
            placeholder={question.type === 'short' ? '단답형' : '장문형'}
            className="p-2 text-slate-700 focus:border-slate-400 border-b-2 focus:bg-slate-100"
          />
        );
      case 'single':
        return <MultiOptionInput type="single" questionData={question} />;
      case 'checkbox':
        return <MultiOptionInput type="checkbox" questionData={question} />;
      case 'dropdown':
        return <DropdownInput questionData={question} />;
    }
  };

  const mapInputType = (key: string) => {
    if (key.startsWith('single')) return 'single';
    if (key.startsWith('checkbox')) return 'checkbox';
    if (key.startsWith('dropdown')) return 'dropdown';
    if (key.startsWith('long')) return 'long';
    if (key.startsWith('short')) return 'short';
    if (key.startsWith('text')) return 'text';
  };

  const transformContent = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.map(Number); // 배열이면 각 요소를 숫자로 변환
    } else if (!isNaN(value)) {
      return [Number(value)]; // 숫자로 변환 가능하면 변환
    }
    return value as string; // 그 외에는 그대로 반환
  };

  const removePrefix = (key: string) => {
    const index = key.indexOf('-');
    return index !== -1 ? key.substring(index + 1) : key;
  };

  const handleFormSubmit: SubmitHandler<FormInputData> = async (data) => {
    try {
      await submitForm({
        submissions: Object.entries(data).map(([key, value]) => ({
          type: mapInputType(key) as questionType,
          questionId: removePrefix(key),
          content: transformContent(value),
        })),
        isTemp: false,
        surveyId: surveyId,
      }).unwrap();
      alert('설문이 성공적으로 제출되었습니다.');
      navigate('/board');
    } catch (err) {
      alert(err.data.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-12 px-4 py-10 bg-white"
      >
        {questions.map((question) => (
          <div key={question.id} className="p-4 flex flex-col gap-4">
            {question.type === 'text' ? (
              <DescriptionBlock description={question.description as string} />
            ) : (
              <>
                <div className="pb-2">
                  <h1 className="text-lg text-slate-700 mb-1">
                    {question.title}
                    {question.required && (
                      <span className="text-red-500 ml-1 text-lg">*</span>
                    )}
                  </h1>
                  <p className="text-sm text-slate-500">
                    {question.description}
                  </p>
                </div>
                {renderResponseInput(question)}
              </>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="text-sm font-bold text-white bg-black px-8 py-2 mx-auto my-12"
        >
          제출하기
        </button>
      </form>
    </FormProvider>
  );
};

export default FormBody;
