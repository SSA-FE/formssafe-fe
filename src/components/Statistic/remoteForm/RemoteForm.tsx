import { useFetchResultQuery } from '@/api/formApi';
import Question from '@components/Statistic/remoteForm/Question';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QuestionListType, ContentType, OptionType } from '@/api/formApi';

const RemoteForm = () => {
  const { formId } = useParams();

  const [questionListResponse, setQuestionListResponse] =
    useState<QuestionListType>();
  const resultQuery = useFetchResultQuery({ formId });
  useEffect(() => {
    if (resultQuery.data) {
      setQuestionListResponse(resultQuery.data);
    }
  }, [resultQuery.data]);

  const getTitle = async () => {
    // 질문 항목
    let contents = questionListResponse?.contents;
    if (!contents) return;

    contents = [...contents].splice(1);

    contents.map((content: ContentType) => {
      const labels = content.options?.map(
        (option: OptionType) => option.detail
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
  };

  useEffect(() => {
    if (questionListResponse !== null) {
      getTitle();
    }
  }, [questionListResponse]);

  return (
    <div className="w-[15rem] h-[21.28125rem] mt-4 mx-auto flex flex-col flex-1 sticky top-10 rounded-lg drop-shadow-md bg-slate-50 gap-4">
      {/* 개별 질문리스트 헤더  */}
      <div className="h-16 gap-2 py-3">
        {/* StatusBar */}
        <div className="w-full px-4 py-2">
          <div className="flex items-center text-xs font-bold gap-x-2 text-neutral-600">
            <div className="w-[12px] h-[12px] flex justify-center items-center text-[10px] text-white bg-blue-400 rounded-full">
              ?
            </div>
            <h1 className="text-lg">질문 리스트</h1>
          </div>

          {/* 총 질문 개수 */}
          <div className="h-6 flex items-center gap-2.5">
            <span className="text-xs font-bold text-neutral-400">
              총{' '}
              {questionListResponse ? questionListResponse.contents.length : 0}
              개의 질문
            </span>
          </div>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="h-[17.28125rem] flex flex-col items-start overflow-y-auto">
        {questionListResponse?.contents.map(
          (content: ContentType, index: number) => {
            if (content.type !== 'text') {
              return (
                <Question
                  question={content.title}
                  number={index}
                  key={'q_' + index}
                />
              );
            }
          }
        )}
      </div>
    </div>
  );
};

export default RemoteForm;
