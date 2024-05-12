/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleIcon from '@/assets/icons/SingleIcon';
import PersonIcon from '@assets/icons/person-icon.svg?react';
// import { resultDummy, answerDummy } from './dummy'; // 더미 데이터
import { useEffect, useState } from 'react';
import { useFetchAnswerQuery, useFetchResultQuery } from '@/api/formApi';
import { useParams } from 'react-router-dom';

const PersonalResult = ({ userId }: { userId: number }) => {
  const { formId } = useParams();
  const [questionListResponse, setQuestionListResponse] = useState<any>(null);
  const [data, setData] = useState<any>();
  const [answerList, setAnswerList] = useState<any>();

  const answerQuery = useFetchAnswerQuery({ formId });
  const resultQuery = useFetchResultQuery({ formId });

  const sortAnswerList = () => {
    const questionOrder = questionListResponse.contents.filter(
      (content: any) => {
        if (content.type !== 'text') {
          return true;
        }
      }
    );

    const sortedAnswerList = questionOrder.map((question: any) => {
      const correct: any = data?.responses?.find(
        (response: any) => question.id === response.questionId
      );
      if (correct) {
        const updatedCorrect = {
          ...correct,
          type: question.type,
          title: question.title,
          description: question.description,
        };
        return updatedCorrect;
      }
      return correct;
    });

    setAnswerList(sortedAnswerList);
  };

  useEffect(() => {
    if (answerQuery.data) {
      setQuestionListResponse(answerQuery.data);
    }
    if (resultQuery.data) {
      console.log(resultQuery.data);
      setData(
        resultQuery.data.totalResponses.filter(
          (x: any) => x.user.userId === userId
        )[0]
      );
    }
  }, [answerQuery.data, resultQuery.data]);

  useEffect(() => {
    if (questionListResponse && answerQuery.data) {
      sortAnswerList();
    }
  }, [data]);

  return (
    <div className="flex flex-col w-5/6 gap-6 px-8 py-8 shadow-md bg-slate-50 max-w-7xl">
      <div>
        <div className="flex items-center justify-end gap-2">
          <PersonIcon />
          <p className="text-sm font-semibold text-slate-500">
            {data?.user?.nickname}
          </p>
        </div>
      </div>
      {questionListResponse?.contents?.map((content: any, index: any) => {
        if (content?.type === 'short' || content?.type === 'long') {
          return (
            <div className="flex flex-col gap-4 px-4 pt-4 pb-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-slate-600">
                  {`${index}. ${content?.title}`}
                </h3>
                <p className="text-base font-normal text-slate-400">
                  {content?.description}
                </p>
              </div>
              <div className="px-2 py-1 border min-h-20 bg-slate-100 border-slate-400 text-slate-600">
                <p>{answerList && answerList[index - 1].content}</p>
              </div>
            </div>
          );
        } else if (
          content.type === 'single' ||
          content.type === 'dropdown' ||
          content.type === 'checkbox'
        ) {
          return (
            <div className="flex flex-col gap-4 px-4 pt-10 pb-4">
              <div className="flex flex-col gap-1 pb-2">
                <h3 className="text-xl font-bold text-slate-600">
                  {`${index}. ${content.title}`}
                </h3>
                <p className="text-base font-normal text-slate-400">
                  {content.description}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {answerList &&
                  content.options?.map((option: any, optionIdx: any) => {
                    if (answerList[index - 1].type === 'checkbox') {
                      // 체크박스의 경우
                      return (
                        <div
                          className={`${answerList[index - 1].content.includes(optionIdx + 1) ? 'bg-slate-100' : 'white'}  flex items-center gap-4 px-4 py-2`}
                        >
                          <SingleIcon
                            strokeColor={`${answerList[index - 1].content.includes(optionIdx + 1) ? '#94A3B8' : '#CBD5E1'}`}
                          />
                          <p className="w-4/5 text-sm font-normal text-slate-600">
                            {option.detail}
                          </p>
                        </div>
                      );
                    } else {
                      // 체크박스 외의 경우
                      return (
                        <div
                          className={`${Number(answerList[index - 1].content) === optionIdx + 1 ? 'bg-slate-100' : 'white'}  flex items-center gap-4 px-4 py-2`}
                        >
                          <SingleIcon
                            strokeColor={`${Number(answerList[index - 1].content) === optionIdx + 1 ? '#94A3B8' : '#CBD5E1'}`}
                          />
                          <p className="w-4/5 text-sm font-normal text-slate-600">
                            {option.detail}
                          </p>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PersonalResult;
