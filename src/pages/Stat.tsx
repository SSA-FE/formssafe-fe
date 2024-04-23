import StatTopBar from '@/components/Statistic/StatTopBar';
import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

function Stat() {
  return (
    <>
      <StatTopBar />
      <div className="flex">
        <div className="h-[calc(100vh-6rem)] bg-red-500 flex flex-col">
          <RemoteForm />
          <UserResultForm />
        </div>
      </div>
    </>
  );
}

export default Stat;
