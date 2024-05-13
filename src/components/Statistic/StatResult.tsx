import Item from '@/components/Statistic/itemBlock/Item';
import MultipleChoiceBlock from '@/components/Statistic/itemBlock/MutipleChoiceBlock';
import EssayQuestionBlock from '@/components/Statistic/itemBlock/EssayQuestionBlock';
import { useEffect, useState } from 'react';
import { useFetchAnswerQuery, useFetchResultQuery } from '@/api/formApi';
import { useParams } from 'react-router-dom';
import {
  QuestionListType,
  ContentType,
  AnswerListType,
  TotalReponseType,
  ResponseType,
} from '@/api/formApi';

export interface User {
  userId: number;
  nickname: string;
  pick: number[];
}

interface Match {
  id: string;
  type: string;
  title: string | null;
  description?: string;
  options?: OptionType;
}

export interface OptionType {
  labels?: string[];
  users: string[] | User | User[];
  values: string[] | number[];
}

export interface QuestionListTmpType {
  description?: string;
  id: string;
  options?: OptionType;
  responseCnt?: number;
  type: string;
  title: string;
}

const StatResult = () => {
  const { formId } = useParams();
  const [questionListResponse, setQuestionListResponse] =
    useState<QuestionListType>();
  const [answerListResponse, setAnswerListResponse] =
    useState<AnswerListType>();
  const [data, setData] = useState<QuestionListTmpType[]>();

  const answerQuery = useFetchAnswerQuery({ formId });
  const resultQuery = useFetchResultQuery({ formId });

  useEffect(() => {
    if (resultQuery.data) {
      setQuestionListResponse(resultQuery.data);
    }
    if (answerQuery.data) {
      setAnswerListResponse(answerQuery.data);
    }
  }, [resultQuery.data, answerQuery.data]);

  const getStat = async () => {
    if (!questionListResponse || !answerListResponse) return;

    let questionListTmp = [];
    let answerList = [];

    // 질문 항목
    let { contents } = questionListResponse;
    contents = [...contents].splice(1);

    questionListTmp = contents.map((content: ContentType) => {
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
    answerList = answerListResponse?.totalResponses;
    answerList.map((answer: TotalReponseType) => {
      answer.responses.map((response: ResponseType, answerInx: number) => {
        if (questionListTmp && questionListTmp.length > 0) {
          let idx = 0;
          const match = questionListTmp.filter(
            (question: Match, index: number) => {
              if (question.id === response.questionId) {
                idx = index;
                return true;
              }
            }
          )[0];

          if (match.type === 'short' || match.type === 'long') {
            ((match.options as OptionType).users as string[]).push(
              answer.user.nickname
            );
            ((match.options as OptionType).values as string[]).push(
              response.content as string
            );
            questionListTmp[idx] = match;
          } else {
            ((match.options as OptionType).users as User[]).push({
              userId: answer.user.userId,
              nickname: answer.user.nickname,
              pick: response.content as number[],
            });

            (response.content as number[]).map((pick: number) => {
              match.options.values[pick - 1]++;
              questionListTmp[idx] = match;
            });
          }
          (
            (questionListTmp as unknown as QuestionListTmpType[])[
              answerInx
            ] as QuestionListTmpType
          ).responseCnt = answerList.length;
        }
      });
    });

    setData(questionListTmp as unknown as QuestionListTmpType[]);
  };

  useEffect(() => {
    if (!questionListResponse || !answerListResponse) return;
    getStat();
  }, [questionListResponse, answerListResponse]);

  return (
    <>
      {data?.map((item: QuestionListTmpType, index: number) => (
        <div key={'_content' + index} id={'_content' + index}>
          <Item key={index} data={item} idx={index + 1}>
            {item.type === 'long' || item.type === 'short' ? (
              <EssayQuestionBlock data={item.options as OptionType} />
            ) : (
              <MultipleChoiceBlock data={item.options as OptionType} />
            )}
          </Item>
        </div>
      ))}
    </>
  );
};

export default StatResult;
