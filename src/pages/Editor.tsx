import FormInfoBar from '@/components/Workspace/FormInfoBar';
import FormMain from '@/components/Workspace/FormMain';
import FormOptionBar from '@/components/Workspace/FormOptionBar';
import FormToolBar from '@/components/Workspace/FormToolBar';

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
