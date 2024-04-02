import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Modal from '@/components/Modal';
import { useEffect } from 'react';
import ArrowSVG from '@/assets/icons/arrow-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';
import { updateUsers } from '@components/users/userSlice';
import { fetchUsers } from '@components/users/userSlice';

type Nickname = {
  nickname: string;
};

const schema = z.object({
  nickname: z
    .string()
    .min(4, { message: '닉네임은 최소 네 글자 이상이어야 합니다.' }),
});

function LoginRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.users);
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

  useEffect(() => {
    const fetchGoogleLogin = async (code: string) => {
      try {
        const response = await instance.post(
          `${API.AUTH}/social/login/google`,
          { code }
        );
        if (response.status === 200) {
          await dispatch(fetchUsers()).unwrap();
        }
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      fetchGoogleLogin(code);
    }
  }, [dispatch, navigate]);

  const handleValid = async (data: Nickname) => {
    try {
      dispatch(updateUsers(data)).then(() => {
        navigate('/myspace');
      });
    } catch (error) {
      console.error(error);
    }
  };

  const checkKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (users.length > 0 && !users[0]?.nickname?.startsWith('user-')) {
      navigate('/myspace');
    }
  }, [users, navigate]);

  return (
    <Modal
      maxWidth={'max-w-nicknamemodal'}
      state={users.length > 0 && users[0]?.nickname?.startsWith('user-')}
    >
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
          onKeyDown={checkKeyDown}
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
