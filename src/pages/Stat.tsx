import FormToolBar from '@/components/Myspace/FormToolBar';
import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

function Stat() {
  return (
    <div>
      <FormToolBar />

      <div className="flex bg-blue-50">
        <UserResultForm />
        <div className="flex-1 h-[2000px]"></div>
        <RemoteForm />
      </div>
    </div>
  );
}

export default Stat;
