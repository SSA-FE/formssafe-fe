import { useSelector } from 'react-redux';
// import { addQuestion } from './questionBlockListSlice';
import QuestionBlockForm from '../questionBlockForm/QuestionBlockForm';
import { RootState } from '@/store';

const QuestionBlockList = () => {
  // const dispatch = useDispatch();
  const { questionList } = useSelector(
    (state: RootState) => state.questionBlockList
  );

  // const test = () => {
  //   dispatch(addQuestion('???'));
  //   // 그냥리스트 추가/삭제/이동만 관리해야함
  // };

  return (
    <div>
      {questionList.map((question) => (
        <QuestionBlockForm
          key={question.id}
          questionType={question.questionType}
        >
          <p>질문 항목인데요</p>
        </QuestionBlockForm>
      ))}
    </div>
  );
};
export default QuestionBlockList;
