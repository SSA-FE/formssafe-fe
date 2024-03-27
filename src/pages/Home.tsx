/**
 * login onboarding page
 */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Modal from '@/components/modal';
import googleIcon from '@/assets/icons/google-icon.svg';
import { useState } from 'react';
import ArrowSVG from '@/assets/icons/arrow-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { GOOGLE_AUTH_URL } from '@/config';

const schema = z.object({
  nickname: z
    .string()
    .min(4, { message: '닉네임은 최소 네 글자 이상이어야 합니다.' }),
});

// nickname을 한개만 받는 type 선언
type Nickname = {
  nickname: string;
};

const Home = () => {
  const [isFirstSignIn] = useState(false);
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

  const handleValid = (data: Nickname) => {
    // data 확인 (향후 삭제)
    console.log(data);
    // TODO: 닉네임 변경 API 추가
    // status 400: 닉네임 중복
    // status 401: 세션이 존재하지 않음
    navigate('/myspace');
  };

  const checkKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className="flex justify-center w-full h-auto py-36">
      <div className="flex flex-col items-center justify-between w-full h-homeFront max-w-homeFront">
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-base font-bold text-neutral-600">
            데이터 수집을 위한 올인원 툴
          </h2>
          <h1 className="text-5xl font-bold text-center text-black">
            폼을 만들고 분석하는
            <br /> 가장 합리적인 방법
          </h1>
          <p className="text-lg font-normal text-center text-slate-800">
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-8">
          <button className="w-full py-4 text-xl font-bold text-white max-w-80 bg-primary rounded-4xl">
            설문지 찾기
          </button>
          <hr className="w-full h-line max-w-96 bg-neutral-300" />
          <button
            className="flex items-center justify-center w-full h-16 gap-4 py-4 text-xl bg-white border-2 border-solid max-w-80 rounded-4xl border-neutral-300"
            onClick={handleLogin}
          >
            <img src={googleIcon} alt="구글 로그인 아이콘" />
            <p className="text-base font-bold text-neutral-400 whitespace-nowrap">
              Google 계정으로 로그인
            </p>
          </button>
        </div>
      </div>
      <button className="fixed flex items-center justify-center w-12 pb-1 text-2xl font-bold text-white bg-black rounded-full aspect-square right-8 bottom-8">
        @
      </button>

      <Modal maxWidth={'max-w-nicknamemodal'} state={isFirstSignIn}>
        <form className="flex flex-col gap-y-4">
          <label htmlFor="nickname" className="text-lg font-bold">
            닉네임
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
    </div>
  );
};

export default Home;
