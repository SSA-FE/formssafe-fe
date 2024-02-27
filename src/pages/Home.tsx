/**
 * login onboarding page
 */

import Modal from '@/components/modal';
import googleIcon from '@/assets/icons/google-icon.svg';

const Home = () => {
  return (
    <div className="h-auto w-full flex justify-center py-36">
      <div className="w-full h-homeFront max-w-homeFront flex flex-col justify-between items-center">
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-neutral-600 text-base font-bold">
            데이터 수집을 위한 올인원 툴
          </h2>
          <h1 className="text-5xl text-black text-center font-bold">
            폼을 만들고 분석하는
            <br /> 가장 합리적인 방법
          </h1>
          <p className="text-lg text-slate-800 text-center font-normal">
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 w-full">
          <button className="w-full max-w-80 bg-primary text-white rounded-4xl py-4 text-xl font-bold">
            설문지 찾기
          </button>
          <hr className="w-full h-line max-w-96 bg-neutral-300" />
          <button className="w-full h-16 max-w-80 flex justify-center items-center bg-white rounded-4xl py-4 text-xl gap-4 border-2 border-solid border-netral-300">
            <img src={googleIcon} alt="구글 로그인 아이콘" />
            <p className="font-bold text-base text-neutral-400 whitespace-nowrap">
              Google 계정으로 로그인
            </p>
          </button>
        </div>
      </div>
      <button className="w-12 flex justify-center items-center bg-black text-white rounded-full aspect-square text-2xl font-bold pb-1 fixed right-8 bottom-8">
        @
      </button>

      <Modal maxWidth={'max-w-nicknamemodal'} state={false}>
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-xl text-neutral-800">
            새로운 계정을 만듭니다.
          </h1>
          <p className="text-neutral-500 font-normal text-base">
            닉네임은 한 번 정하면 바꿀 수 없습니다.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="nickname" className="font-bold text-lg">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            placeholder="google account default name"
            className="bg-neutral-200 rounded-2xl w-full py-2 px-4"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
