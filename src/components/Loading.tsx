import spinner from '@assets/gif/spinner.gif';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loading;
