import { useFetchAnswerQuery } from '@/api/formApi';
import Question from '@components/Statistic/remoteForm/Question';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface AnswerListType {
  author: AuthorType;
  contents: ContentType[];
  description: string;
  endDate: string;
  expectTime: number;
  id: number;
  image: string[];
  privacyDisposalDate?: string;
  questionCnt: number;
  recipients: RecipientType[];
  responseCnt: number;
  reward?: RewardType;
  startDate: string;
  status: string;
  tags?: TagType[];
  title: string;
}

interface AuthorType {
  email: string;
  nickname: string;
  userId: number;
}

interface ContentType {
  description?: string;
  id: number;
  type: string;
  title: string | null;
  options?: OptionType[];
  isRequired: boolean;
  isPrivacy: boolean;
}

interface OptionType {
  id: number;
  detail: string;
}

interface RewardType {
  category: string;
  count: number;
  name: string;
}

interface TagType {
  id: number;
  name: string;
}

interface RecipientType {
  id: number;
  nickname: string;
}

const RemoteForm = () => {
  const { formId } = useParams();

  const [questionListResponse, setQuestionListResponse] =
    useState<AnswerListType>();
  const answerQuery = useFetchAnswerQuery({ formId });
  useEffect(() => {
    if (answerQuery.data) {
      setQuestionListResponse(answerQuery.data);
    }
  }, [answerQuery.data]);

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
    <div className="w-[15rem] h-[21.28125rem] mt-4 mx-auto flex flex-col flex-1 sticky top-10 rounded-lg drop-shadow-md bg-slate-50 ">
      {/* 개별 질문리스트 헤더  */}
      <div className="h-16 gap-2 py-3">
        {/* StatusBar */}
        <div className="w-full px-4 py-2">
          <div className="flex items-center text-xs font-bold gap-x-2 text-neutral-600">
            <div className="w-[12px] h-[12px] flex justify-center items-center text-[10px] text-white bg-blue-400 rounded-full">
              ?
            </div>
            <h1>질문 리스트</h1>
          </div>

          {/* 총 질문 개수 */}
          <div className="h-6 flex items-center gap-2.5">
            <span className="font-bold text-[10px] text-neutral-400">
              총 {questionListResponse?.contents.length}개의 질문
            </span>
          </div>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="h-[17.28125rem] flex flex-col items-start overflow-y-scroll">
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
