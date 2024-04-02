import FormInfoBar from '@/components/Myspace/FormInfoBar';
import FormMain from '@/components/Myspace/FormMain';
import FormOptionBar from '@/components/Myspace/FormOptionBar';
import FormToolBar from '@/components/Myspace/FormToolBar';

const Editor = () => {
  return (
    <div>
      <FormToolBar />
      <div className="flex pt-2 bg-neutral-50">
        <FormInfoBar />
        <FormMain />
        <FormOptionBar />
      </div>
    </div>
  );
};

export default Editor;
