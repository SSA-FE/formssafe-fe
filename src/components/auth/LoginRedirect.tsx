import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Modal from '@/components/Modal';
import { useEffect } from 'react';
import ArrowSVG from '@/assets/icons/arrow-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';
import { useUpdateUserMutation } from '@api/userApi';
import { useFetchUserQuery } from '@api/userApi';
type Nickname = {
  nickname: string;
};

const schema = z.object({
  nickname: z
    .string()
    .min(4, { message: '닉네임은 최소 네 글자 이상이어야 합니다.' }),
});

function LoginRedirect() {
  const { data: user, refetch } = useFetchUserQuery();
  console.log(user);
  const [updateUser] = useUpdateUserMutation();
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

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const fetchGoogleLogin = async (code: string) => {
      try {
        const response = await instance.post(
          `${API.AUTH}/social/login/google`,
          { code }
        );
        if (response.status === 200) {
          refetch();
        }
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    if (code) {
      fetchGoogleLogin(code);
    }
  }, []);

  const handleValid = async (data: Nickname) => {
    try {
      await updateUser({ nickname: data.nickname }).unwrap();
      navigate('/myspace');
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
    if (user && user.userInfo && !user.userInfo.nickname.startsWith('user-')) {
      navigate('/myspace');
    } else if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const isEmptyObj = (obj: object): boolean =>
    obj.constructor === Object && Object.keys(obj).length === 0;

  if (!user || !user.userInfo) {
    return null;
  }

  return (
    <Modal
      maxWidth={'max-w-nicknamemodal'}
      state={
        user &&
        user.userInfo &&
        !isEmptyObj(user.userInfo) &&
        user.userInfo.nickname?.startsWith('user-')
      }
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
