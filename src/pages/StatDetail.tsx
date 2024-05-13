import PersonalResult from '@/components/Statistic/PersonalResult';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm.tsx';
import { useEffect, useState } from 'react';
import { useFetchAnswerQuery, AnswerListType } from '@/api/formApi';
import { useParams } from 'react-router-dom';

const StatDetail = () => {
  const { formId } = useParams();
  const [userId, setUserId] = useState<number>(18);
  const answerQuery = useFetchAnswerQuery({ formId });
  const [answerListResponse, setAnswerListResponse] =
    useState<AnswerListType>();

  useEffect(() => {
    if (answerQuery.data) {
      setAnswerListResponse(answerQuery.data);
    }
  }, [answerQuery.data]);

  useEffect(() => {
    if (answerListResponse) {
      const id = answerListResponse.totalResponses[0].user.userId;
      setUserId(id);
    }
  }, [answerListResponse]);

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
