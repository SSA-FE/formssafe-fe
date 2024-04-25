import { ChangeEvent, useState } from 'react';
import User from './User';

import searchIcon from '@assets/icons/search-icon.svg';

const DUMMY_USER_DATA: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];
const UserResultForm = () => {
  const [userData, setUserData] = useState<number[]>(DUMMY_USER_DATA);
  const handleSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim() === '') {
      setUserData(DUMMY_USER_DATA);
      return;
    }
    const searchUserData = DUMMY_USER_DATA.filter((val: number) =>
      val.toString().includes(e.target.value)
    );
    setUserData(searchUserData);
  };
  return (
    <div className="flex flex-1 flex-col h-screen sticky top-0 bg-slate-100 text-xs">
      <div className="flex flex-col gap-2 h-[5.375rem] pt-2 pb-4">
        {/* StatusBar */}
        <div className="flex items-center justify-center h-6">
          <h1 className="font-bold text-slate-400">총 40명의 설문자</h1>
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
        {userData.map((val: number, index: number) => (
          <User key={'_survey_user' + index} name={val.toString()} />
        ))}
      </div>
    </div>
  );
};

export default UserResultForm;
