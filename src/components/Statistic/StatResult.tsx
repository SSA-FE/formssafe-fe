/* eslint-disable @typescript-eslint/no-explicit-any */
import Item from '@/components/Statistic/itemBlock/Item';
import MultipleChoiceBlock from '@/components/Statistic/itemBlock/MutipleChoiceBlock';
import EssayQuestionBlock from '@/components/Statistic/itemBlock/EssayQuestionBlock';
import { useEffect, useState } from 'react';
import { useFetchAnswerQuery, useFetchResultQuery } from '@/api/formApi';
import { useParams } from 'react-router-dom';

const StatResult = () => {
  const { formId } = useParams();
  const [questionListResponse, setQuestionListResponse] = useState<any>(null);
  const [answerListResponse, setAnswerListResponse] = useState<any>(null);
  const [data, setData] = useState<any[]>();

  const answerQuery = useFetchAnswerQuery({ formId });
  const resultQuery = useFetchResultQuery({ formId });

  useEffect(() => {
    if (answerQuery.data) {
      setQuestionListResponse(answerQuery.data);
    }
    if (resultQuery.data) {
      setAnswerListResponse(resultQuery.data);
    }
  }, [answerQuery.data, resultQuery.data]);

  const getStat = async () => {
    let questionList: any[] = [];
    let answerList = [];

    // 질문 항목
    let { contents } = questionListResponse;
    contents = [...contents].splice(1);

    questionList = contents.map((content: any) => {
      const labels = content.options?.map(
        (option: { id: number; detail: string }) => option.detail
      );

      return {
        id: content.id,
        type: content.type,
        title: content.title,
        description: content.description,
        options:
          content.type === 'short' || content.type === 'long'
            ? { users: [], values: [] }
            : {
                labels: labels || [],
                users: [],
                values: labels ? new Array(labels.length).fill(0) : [],
              },
      };
    });

    // 답변 리스트
    answerList = answerListResponse.totalResponses;
    answerList.map((answer: any) => {
      answer.responses.map((response: any, answerInx: number) => {
        if (questionList && questionList.length > 0) {
          let idx: number;
          const match = questionList.filter((x: any, index: number) => {
            if (x.id === response.questionId) {
              idx = index;
              return true;
            }
          })[0];
          if (match.type === 'short' || match.type === 'long') {
            match.options.users.push(answer.user.nickname);
            match.options.values.push(response.content);
            questionList[idx] = match;
          } else {
            match.options.users.push({
              userId: answer.user.userId,
              nickname: answer.user.nickname,
              pick: response.content,
            });

            response.content.map((pick: number) => {
              match.options.values[pick - 1]++;
              questionList[idx] = match;
            });
          }
          questionList[answerInx]['responseCnt'] = answerList.length;
        }
      });
    });

    setData(questionList);
  };

  useEffect(() => {
    if (questionListResponse !== null && answerListResponse !== null) {
      getStat();
    }
  }, [questionListResponse, answerListResponse]);

  return (
    <>
      {data?.map((item: any, index: number) => (
        <div key={'_content' + index}>
          <Item key={index} data={item} idx={index + 1}>
            {item.type === 'long' || item.type === 'short' ? (
              <EssayQuestionBlock data={item.options} />
            ) : (
              <MultipleChoiceBlock data={item.options} />
            )}
          </Item>
        </div>
      ))}
    </>
  );
};

export default StatResult;
