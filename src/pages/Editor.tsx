import FormInfoBar from '@/components/Workspace/FormInfoBar';
import FormMain from '@/components/Workspace/FormMain';
import FormOptionBar from '@/components/Workspace/FormOptionBar';

const Editor = () => {
  return (
    <div className="flex">
      <FormInfoBar />
      <FormMain />
      <FormOptionBar />
    </div>
  );
};

export default Editor;
