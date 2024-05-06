import Question from '@components/Statistic/remoteForm/Question';
import { useEffect, useRef } from 'react';

interface RemoteFormProps {
  type: string;
  title: string;
  description?: string;
  responseCnt: number;
  options: {
    labels?: string[];
    users: userType[];
    values: number[] | string[];
  };
}

interface userType {
  id: number;
  nickname: string;
  pick?: number;
}

const RemoteForm = ({ data }: { data: RemoteFormProps[] }) => {
  const titleList = useRef<string[]>(
    data.map((item: RemoteFormProps) => item.title)
  );
  useEffect(() => {
    console.log(titleList.current.length);
  }, []);
  return (
    <div className="w-[15rem] h-[21.28125rem] mt-4 mx-auto flex flex-col flex-1 sticky top-10 rounded-lg drop-shadow-md bg-slate-50 ">
      {/* 개별 질문리스트 헤더  */}
      <div className="h-16 gap-2 py-3">
        {/* StatusBar */}
        <div className="w-full px-4 py-2">
          <div className="flex items-center text-xs font-bold gap-x-2 text-neutral-600">
            <div className="w-[12px] h-[12px] flex justify-center items-center text-[10px] text-white bg-blue-400 rounded-full">
              ?
            </div>
            <h1>질문 리스트</h1>
          </div>

          {/* 총 질문 개수 */}
          <div className="h-6 flex items-center gap-2.5">
            <span className="font-bold text-[10px] text-neutral-400">
              총 40개의 질문
            </span>
          </div>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="h-[17.28125rem] flex flex-col items-start overflow-y-scroll">
        {titleList.current.map((title: string, index: number) => (
          <Question question={title} number={index} key={'q_' + index} />
        ))}
      </div>
    </div>
  );
};

export default RemoteForm;
