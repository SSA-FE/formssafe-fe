import { Spinner } from '@assets/icons';

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner width="80" />
    </div>
  );
};

export default Loading;
