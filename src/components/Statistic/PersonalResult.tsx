import PersonIcon from '@assets/icons/person-icon.svg?react';
import { useEffect, useState } from 'react';
import {
  QuestionListType,
  ContentType,
  useFetchAnswerQuery,
  useFetchResultQuery,
  TotalReponseType,
  OptionType,
  ResponseType,
} from '@/api/formApi';
import { useParams } from 'react-router-dom';
import {
  SingleIcon,
  DropdownIcon,
  CheckboxIcon,
} from '@/assets/icons/AnswertOptionsIcons';

interface SortedAnswerListType {
  content: string | number[];
  description?: string;
  questionId: string;
  title?: string;
  type?: string;
}

const PersonalResult = ({ userId }: { userId: number }) => {
  const { formId } = useParams();
  const [questionListResponse, setQuestionListResponse] =
    useState<QuestionListType>();
  const [sortedAnswerList, setSortedAnswerList] =
    useState<SortedAnswerListType[]>();
  const [data, setData] = useState<TotalReponseType>();

  const answerQuery = useFetchAnswerQuery({ formId });
  const resultQuery = useFetchResultQuery({ formId });

  const sortAnswerList = () => {
    if (!questionListResponse) return;

    const questionOrder = questionListResponse.contents.filter(
      (content: ContentType) => {
        if (content.type !== 'text') {
          return true;
        }
      }
    );

    const sortedAnswerList = questionOrder.map((question: ContentType) => {
      const correct: ResponseType | undefined = data?.responses?.find(
        (response: ResponseType) => question.id === response.questionId
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
      return undefined;
    });

    setSortedAnswerList(sortedAnswerList as SortedAnswerListType[]);
  };

  useEffect(() => {
    if (resultQuery.data) {
      setQuestionListResponse(resultQuery.data);
    }
    if (answerQuery.data) {
      setData(
        answerQuery.data.totalResponses.filter(
          (x: TotalReponseType) => x.user.userId === userId
        )[0]
      );
    }
  }, [resultQuery.data, answerQuery.data, userId]);

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
      {questionListResponse?.contents?.map(
        (content: ContentType, index: number) => {
          if (content?.type === 'short' || content?.type === 'long') {
            return (
              <div
                key={content.id}
                className="flex flex-col gap-4 px-4 pt-4 pb-4"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-slate-600">
                    {`${index}. ${content?.title}`}
                  </h3>
                  <p className="text-base font-normal text-slate-400">
                    {content?.description}
                  </p>
                </div>
                <div className="px-2 py-1 border min-h-20 bg-slate-100 border-slate-400 text-slate-600">
                  <p>
                    {sortedAnswerList && sortedAnswerList[index - 1].content}
                  </p>
                </div>
              </div>
            );
          } else if (
            content.type === 'single' ||
            content.type === 'dropdown' ||
            content.type === 'checkbox'
          ) {
            return (
              <div
                key={content.id}
                className="flex flex-col gap-4 px-4 pt-10 pb-4"
              >
                <div className="flex flex-col gap-1 pb-2">
                  <h3 className="text-xl font-bold text-slate-600">
                    {`${index}. ${content.title}`}
                  </h3>
                  <p className="text-base font-normal text-slate-400">
                    {content.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {sortedAnswerList &&
                    content.options?.map(
                      (option: OptionType, optionIdx: number) => {
                        if (
                          (sortedAnswerList[index - 1] as SortedAnswerListType)
                            .type === 'checkbox'
                        ) {
                          // 체크박스의 경우
                          return (
                            <div
                              key={option.id}
                              className={`${(sortedAnswerList[index - 1].content as number[]).includes(optionIdx + 1) ? 'bg-slate-100' : 'white'}  flex items-center gap-4 px-4 py-2`}
                            >
                              <CheckboxIcon
                                fillColor={`${(sortedAnswerList[index - 1].content as number[]).includes(optionIdx + 1) ? '#94A3B8' : '#CBD5E1'}`}
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
                              key={option.id}
                              className={`${Number(sortedAnswerList[index - 1].content) === optionIdx + 1 ? 'bg-slate-100' : 'white'}  flex items-center gap-4 px-4 py-2`}
                            >
                              {(
                                sortedAnswerList[
                                  index - 1
                                ] as SortedAnswerListType
                              ).type === 'dropdown' ? (
                                <DropdownIcon
                                  fillColor={`${Number(sortedAnswerList[index - 1].content) === optionIdx + 1 ? '#94A3B8' : '#CBD5E1'}`}
                                />
                              ) : (
                                <SingleIcon
                                  fillColor={`${Number(sortedAnswerList[index - 1].content) === optionIdx + 1 ? '#94A3B8' : '#CBD5E1'}`}
                                />
                              )}

                              <p className="w-4/5 text-sm font-normal text-slate-600">
                                {option.detail}
                              </p>
                            </div>
                          );
                        }
                      }
                    )}
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
};

export default PersonalResult;
