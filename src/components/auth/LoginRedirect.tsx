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
  nickname: z
    .string()
    .min(4, { message: '닉네임은 최소 네 글자 이상이어야 합니다.' }),
});

function LoginRedirect() {
  const [user, setUser] = useState<UserType>(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Nickname>({
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
    try {
      const response = await instance.post(`${API.USERS}/join`, data);
      if (response.status === 200) {
        navigate('/myspace');
      }
    } catch (error) {
      // TODO: error handling
      console.error(error);
      navigate('/');
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!user) return;
    const destination = user.isActive ? '/myspace' : '';
    if (destination) {
      navigate(destination);
    }
  }, [user, navigate]);

  const isModalOpen = user?.isActive === false;

  return (
    <Modal maxWidth={'max-w-nicknamemodal'} state={isModalOpen}>
      <form className="flex flex-col gap-y-4">
        <label htmlFor="nickname" className="text-lg font-bold">
          닉네임을 입력하세요
        </label>
        <p className="info-message">
          ⓘ 닉네임은 최소 네 글자 이상이어야 합니다.
        </p>
        <input
          type="text"
          id="nickname"
          className="w-full px-4 py-2 bg-neutral-200 rounded-2xl"
          onKeyDown={handleEnterKey}
          {...register('nickname')}
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}
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
