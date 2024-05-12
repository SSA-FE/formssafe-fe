import PersonalResult from '@/components/Statistic/PersonalResult';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm.tsx';
import { useEffect, useState } from 'react';

import { useFetchResultQuery } from '@/api/formApi';
import { useParams } from 'react-router-dom';

interface AnswerListType {
  formId: number;
  responseCnt: number;
  totalResponses: ResponseType[];
}

interface ResponseType {
  responseId: number;
  user: UserType;
  responses: Response[];
  responsedAt: string;
}

interface UserType {
  userId: number;
  nickname: string;
}

interface Response {
  questionId: number;
  content: string | number | number[];
}

const StatDetail = () => {
  const { formId } = useParams();
  const [userId, setUserId] = useState<number>(18);
  const resultQuery = useFetchResultQuery({ formId });
  const [answerListResponse, setAnswerListResponse] =
    useState<AnswerListType>();

  useEffect(() => {
    if (resultQuery.data) {
      setAnswerListResponse(resultQuery.data);
    }
  }, [resultQuery.data]);

  useEffect(() => {
    if (answerListResponse) {
      const id = answerListResponse.totalResponses[0].user.userId;
      setUserId(id);
    }
  }, [answerListResponse]);

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  return (
    <div className="flex h-[calc(200vh-6rem)] mt-4">
      {/* 사이드바 */}
      <div className="w-[19.5rem]">
        <UserResultForm setUserId={setUserId} />
      </div>

      <div className="flex items-start justify-start flex-1">
        <PersonalResult userId={userId} />
      </div>
    </div>
  );
};

export default StatDetail;
