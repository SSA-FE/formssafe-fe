import { ChangeEvent, useEffect, useState } from 'react';
import User from './User';

import searchIcon from '@assets/icons/search-icon.svg';
import { useFetchAnswerQuery } from '@/api/formApi';
import { useParams } from 'react-router-dom';
import { TotalReponseType } from '@/api/formApi';

interface UserResultFormProps {
  setUserId: (userId: number) => void;
}

const UserResultForm = (props: UserResultFormProps) => {
  const [userData, setUserData] = useState<TotalReponseType[]>();
  const [answerListResponse, setAnswerListResponse] =
    useState<TotalReponseType[]>();
  const { formId } = useParams();
  const answerQuery = useFetchAnswerQuery({ formId });

  useEffect(() => {
    if (answerQuery.data) {
      setAnswerListResponse(answerQuery.data.totalResponses);
      setUserData(answerQuery.data.totalResponses);
    }
  }, [answerQuery.data]);

  const handleSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim() === '') {
      setUserData(answerListResponse);
      return;
    }
    const searchUserData = answerListResponse!.filter(
      (answer: TotalReponseType) =>
        answer.user.nickname.includes(e.target.value.trim())
    );
    setUserData(searchUserData);
  };

  return (
    <div className="sticky top-0 flex flex-col flex-1 h-screen text-xs bg-slate-100">
      <div className="flex flex-col gap-2 h-[5.375rem] pt-2 pb-4">
        {/* StatusBar */}
        <div className="flex items-center justify-center h-6">
          <h1 className="font-bold text-slate-400">
            총 {answerListResponse?.length}명의 설문자
          </h1>
        </div>

        {/* 총 질문 개수 */}
        <div className="w-[18rem] mx-auto pl-6 pr-4 flex flex-1 justify-between items-center bg-slate-50 text-slate-300 font-bold rounded-full border border-slate-200">
          <input
            onChange={handleSearchUser}
            className="w-full py-2 bg-transparent text-slate-400 focus:outline-none"
            type="text"
            placeholder="설문자를 검색하세요"
          />
          <button>
            <img className="ml-2" src={searchIcon} alt="search-icon" />
          </button>
        </div>
      </div>

      {/* 개별 질문리스트 */}
      <div className="flex flex-col items-start flex-1 overflow-y-scroll">
        {userData?.map((res: TotalReponseType, index: number) => (
          <User key={index} user={res.user} setUserId={props.setUserId} />
        ))}
      </div>
    </div>
  );
};

export default UserResultForm;
