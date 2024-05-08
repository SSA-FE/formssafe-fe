import PersonalResult from '@/components/Statistic/PersonalResult';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

const StatDetail = () => {
  return (
    <div className="flex h-[calc(200vh-6rem)] ">
      {/* 사이드바 */}
      <div className="w-[19.5rem]">
        <UserResultForm />
      </div>

      <div className="flex items-start justify-start flex-1">
        <PersonalResult userId={2} />
      </div>
    </div>
  );
};

export default StatDetail;
