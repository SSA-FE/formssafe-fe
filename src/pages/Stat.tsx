import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

function Stat() {
  return (
    <>
      <div className="flex">
        <div className="w-[19.5rem] h-[calc(100vh-6rem)] flex flex-col border-r border-slate-600">
          <RemoteForm />
          <UserResultForm />
        </div>
      </div>
    </>
  );
}

export default Stat;
