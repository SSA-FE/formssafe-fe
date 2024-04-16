import StatTopBar from '@/components/Statistic/StatTopBar';
import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

function Stat() {
  return (
    <div>
      <StatTopBar />

      <div className="flex">
        <RemoteForm />
        <UserResultForm />
      </div>
    </div>
  );
}

export default Stat;
