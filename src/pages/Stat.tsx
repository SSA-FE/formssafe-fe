import FormToolBar from '@/components/Myspace/FormToolBar';
import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import UserResultForm from '@/components/Statistic/userResultForm/UserResultForm';

function Stat() {
  return (
    <div>
      <FormToolBar />

      <div className="flex">
        <UserResultForm />
        <RemoteForm />
      </div>
    </div>
  );
}

export default Stat;
