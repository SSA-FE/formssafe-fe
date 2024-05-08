import PersonalResult from '@/components/Statistic/PersonalResult';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';
import { useState } from 'react';

const StatDetail = () => {
  const [userId, setUserId] = useState<number>(2);
  return (
    <div className="flex h-[calc(200vh-6rem)] ">
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
