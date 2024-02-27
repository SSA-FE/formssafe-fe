import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-xl">404 Not Found</h1>
        <Link to="/">메인 화면으로 이동하기</Link>
      </div>
    </div>
  );
}

export default NotFound;
