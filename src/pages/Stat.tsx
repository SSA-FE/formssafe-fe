import StatTopBar from '@/components/Statistic/StatTopBar';
import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

function Stat() {
  return (
    <>
      <StatTopBar />
      <div className="flex bg-blue-50">
        <UserResultForm />
        <div className="flex-1 h-[2000px]"></div>
        <RemoteForm />
      </div>
    </>
  );
}

export default Stat;
