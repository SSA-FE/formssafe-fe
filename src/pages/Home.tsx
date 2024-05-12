import { useFetchUserQuery } from '@/api/userApi';
import { FormExampleIcon1, FormExampleIcon2 } from '@/assets/icons';
import googleIcon from '@/assets/icons/google-icon.svg';
import { GOOGLE_AUTH_URL } from '@/config';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isError } = useFetchUserQuery();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isError) {
      window.location.href = GOOGLE_AUTH_URL;
    } else {
      navigate('/board');
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center py-[6rem] px-[10rem]">
      <div className="w-1/2 flex flex-col gap-8 min-w-[450px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-base text-slate-500 flex flex-col gap-4">
            <p>
              데이터 수집을 위한 올인원 툴<br />
            </p>
            <span className="w-fit bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500 font-bold text-5xl">
              폼나는 SSAFFE
            </span>
          </h1>
          <p className="text-base text-slate-500 ">
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            <br />
            설문과 관련된 모든 작업은 폼나는 싸패에서 한번에 해결하실 수
            있습니다.
          </p>
        </div>
        <button
          className="flex items-center justify-center h-12 gap-4 py-4 px-4 mb-16 bg-white border-2 border-solid max-w-60 rounded-4xl border-neutral-300 w-max-content"
          onClick={handleLogin}
        >
          <img src={googleIcon} alt="구글 로그인 아이콘" width="20" />
          <p className="text-sm font-bold text-slate-400 whitespace-nowrap">
            Google 계정으로 로그인
          </p>
        </button>
      </div>
      <div className="flex flex-col w-1/2 gap-8 min-w-max">
        <div className="w-full slide-in border-l px-4">
          <FormExampleIcon1 width="330" />
        </div>
        <div className="w-full slide-in-1 border-l px-4">
          <FormExampleIcon2 width="450" />
        </div>
      </div>
    </div>
  );
};

export default Home;
