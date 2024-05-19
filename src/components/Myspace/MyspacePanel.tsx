import MyspaceToolbar from './toolbar/MyspaceToolbar';

const MyspacePanel = () => {
  return (
    <div className="flex flex-col items-start w-full h-12 px-8 space-y-2 bg-white min-w-min">
      <div className="flex justify-start w-full">
        <MyspaceToolbar />
      </div>
    </div>
  );
};

export default MyspacePanel;
