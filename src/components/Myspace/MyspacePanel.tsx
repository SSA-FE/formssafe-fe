import { Link } from 'react-router-dom';
import MyspaceToolbar from './toolbar/MyspaceToolbar';
import { EditIcon } from '@assets/icons';

const MyspacePanel = () => {
  return (
    <div className="w-full h-12 flex flex-col px-8 items-start space-y-2 border-b-[1px] bg-white min-w-min">
      <div className="flex justify-between w-full">
        <MyspaceToolbar />
        <Link
          to="/editor"
          className="shadow-md box-border flex w-auto px-5 py-2 space-x-2 text-xs font-bold text-white bg-blue-500 rounded-[38px] h-9 whitespace-nowrap"
        >
          <EditIcon width="10" />
          <p className="flex items-center">설문 작성하기</p>
        </Link>
      </div>
    </div>
  );
};

export default MyspacePanel;
