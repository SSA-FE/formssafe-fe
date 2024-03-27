import { instance } from '@/api/axios';
import { API } from '@/config';
import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function GoogleRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/';

  // 컴포넌트가 마운트되면 로그인 로직 실행
  useEffect(() => {
    if (code) {
      instance
        .post(`${API.AUTH}/social/login/GOOGLE`, { code })
        .then((res) => {
          if (res.status === 200) {
            // TODO: 로그인 성공 시 Redux state에 유저 정보 저장
            console.log('로그인 성공');
            navigate(from);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return <Navigate replace to="/" />;
}

export default GoogleRedirect;
