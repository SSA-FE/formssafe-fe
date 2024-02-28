import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  // TODO: isAuthenticated 변수를 authenticate정보로 초기화
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
