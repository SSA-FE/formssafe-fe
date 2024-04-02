import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { useEffect } from 'react';
import { API } from '@/config';

const GoogleOAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      (async () => {
        try {
          const res = await instance.post(`${API.AUTH}/social/login/google`, {
            code,
          });

          if (res.status === 200) navigate('/myspace');
        } catch (error) {
          console.error(error);
          navigate('/');
        }
      })();
    }
  }, [navigate]);

  return null;
};

export default GoogleOAuth;
