import MyspacePanel from '@/components/Myspace/MyspacePanel';
import MyspaceMain from '@/components/Myspace/MyspaceMain';

const Myspace = () => {
  return (
    <div className="w-full h-screen bg-neutral-100 ">
      <MyspacePanel />
      <MyspaceMain />
    </div>
  );
};

export default Myspace;
