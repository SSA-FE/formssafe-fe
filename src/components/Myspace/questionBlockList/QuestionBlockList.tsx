import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import QuestionBlock from '../questionBlock/QuestionBlock';

const QuestionBlockList = () => {
  const { questionList } = useSelector(
    (state: RootState) => state.questionBlockList
  );

  return (
    <div className="flex flex-col gap-sm">
      {questionList.map((question) => (
        <QuestionBlock
          key={question.id}
          questionId={question.id}
          questionType={question.type}
        />
      ))}
    </div>
  );
};
export default QuestionBlockList;
