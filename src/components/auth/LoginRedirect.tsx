import { useCallback, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Modal from '@/components/Modal';
import ArrowSVG from '@/assets/icons/arrow-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';

type UserType = {
  userId: number;
  nickname: string;
  imageUrl: string;
  email: string;
  isActive: boolean;
} | null;

type Nickname = {
  nickname: string;
};

const schema = z.object({
  nickname: z.string().min(1),
});

function LoginRedirect() {
  const [user, setUser] = useState<UserType>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Nickname>({
    resolver: zodResolver(schema),
    defaultValues: {
      nickname: '',
    },
  });

  const fetchUser = useCallback(async () => {
    try {
      const response = await instance.get(`${API.USERS}/profile`);
      return response.data;
    } catch (error) {
      console.error(error);
      navigate('/');
    }
  }, [navigate]);

  const fetchGoogleLogin = useCallback(
    async (code: string) => {
      try {
        const response = await instance.post(
          `${API.AUTH}/social/login/google`,
          {
            code,
          }
        );
        if (response.status === 200) {
          const fetchedUser = await fetchUser();
          if (fetchedUser) {
            setUser(fetchedUser);
          }
        }
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    },
    [fetchUser, navigate]
  );

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchGoogleLogin(code);
    }
  }, [fetchGoogleLogin]);

  const handleValid = async (data: Nickname) => {
    data.nickname = data.nickname.trim().replace(/\s+/g, ' ');
    if (data.nickname === '') return;
    try {
      const response = await instance.post(`${API.USERS}/join`, data);
      if (response.status === 200) {
        navigate('/board');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('이미 사용중인 닉네임입니다.');
    }
  };

  useEffect(() => {
    if (!user) return;
    const destination = user.isActive ? '/board' : '';
    if (destination) {
      navigate(destination);
    }
  }, [user, navigate]);

  const isModalOpen = user?.isActive === false;

  return (
    <Modal maxWidth={'max-w-nicknamemodal'} state={isModalOpen}>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit(handleValid)}
      >
        <label htmlFor="nickname" className="text-lg font-bold">
          닉네임을 입력하세요
        </label>
        {errorMessage ? (
          <p className="info-message">ⓘ {errorMessage}</p>
        ) : (
          <div className="w-full h-5"></div>
        )}
        <input
          type="text"
          id="nickname"
          className="w-full h-8 px-4 py-2 bg-neutral-200 rounded-2xl"
          {...register('nickname')}
        />
      </form>
      <div className="flex justify-end pt-8">
        <button
          className="gap-2 text-sm text-neutral-400 "
          onClick={handleSubmit(handleValid)}
        >
          <ArrowSVG transform="rotate(180)" />
        </button>
      </div>
    </Modal>
  );
}

export default LoginRedirect;
