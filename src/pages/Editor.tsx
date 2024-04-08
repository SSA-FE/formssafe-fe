import FormInfoBar from '@/components/Myspace/FormInfoBar';
import FormMain from '@/components/Myspace/FormMain';
import FormOptionBar from '@/components/Myspace/FormOptionBar';
import FormToolBar from '@/components/Myspace/FormToolBar';

const Editor = () => {
  return (
    <div>
      <FormToolBar />
      <div className="flex bg-white">
        <FormInfoBar />
        <FormMain />
        <FormOptionBar />
      </div>
    </div>
  );
};

export default Editor;
