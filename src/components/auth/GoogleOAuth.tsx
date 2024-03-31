import { Navigate, useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { useEffect } from 'react';
import { API } from '@/config';

const GoogleOAuth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  const handleOAuth = async (code: string) => {
    try {
      // 구글로부터 받아온 code를 서버에 전달하여 구글로 회원가입 & 로그인한다
      const response = await instance.post(`${API.AUTH}/social/login/google`, {
        code: code,
      });
      const data = response.data; // 응답 데이터
      console.log(data);
      navigate('myspace');
    } catch (error) {
      console.error(error);
      navigate('/');
    }
  };

  useEffect(() => {
    if (code) {
      handleOAuth(code);
    }
  }, [code, handleOAuth]);

  return <Navigate to="/" replace={true} />;
};

export default GoogleOAuth;
