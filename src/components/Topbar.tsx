import { useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '@/api/userApi';
import { InactiveAlarmIcon } from '@assets/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';

const Topbar = () => {
  const [alarmModalOpen, setAlarmModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const location = useLocation();
  const { data } = useFetchUserQuery();
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setAlarmModalOpen(false);
        setProfileModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      const response = await instance.get(`${API.AUTH}/logout`);
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  const AlarmModal = () => (
    <div
      ref={modalRef}
      className="absolute top-full right-0 border rounded-md border-slate-200 h-[240px] w-[320px] bg-white py-1 shadow-md"
    ></div>
  );

  const ProfileModal = () => (
    <div
      ref={modalRef}
      className="absolute top-full right-0 border rounded-md border-slate-200 h-[108px] w-[124px] bg-white shadow-md gap-3 flex flex-col px-4 py-4"
    >
      {isEditing ? (
        <input
          type="text"
          defaultValue={data?.nickname}
          className="box-border font-bold border-2 text-slate-800"
        />
      ) : (
        <h1 className="font-bold text-slate-800">{data?.nickname}</h1>
      )}
      <div className="flex flex-col gap-2">
        <button
          className="text-xs text-left"
          onClick={() => setIsEditing(true)}
        >
          닉네임 변경
        </button>
        <button
          className="text-xs text-left text-red-500"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );

  return (
    <nav className="flex items-center justify-between w-full px-8 py-2 h-topbar min-h-16 whitespace-nowrap">
      <div className="flex align-middle gap-9">
        <p className="text-base font-bold text-slate-800">폼나는 싸패</p>
        <div className="flex items-center text-sm gap-xs">
          <span className="flex items-center h-full px-4 text-neutral-500 rounded-2xl bg-neutral-200 ">
            v 3.4.1 24/02/13
          </span>
          <span className="flex items-center h-full px-4 bg-primaryTag text-primaryTag rounded-2xl">
            2024 SAFFE FORM PROJECT Create your own Form
          </span>
        </div>
      </div>
      {location.pathname !== '/' && data && (
        <div className="relative">
          <div className="flex px-3 py-2 my-1 h-14 w-[124px] items-center justify-between">
            <button
              className="flex items-center justify-center w-10 h-10 bg-transparent rounded-full cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
              onClick={() => {
                setAlarmModalOpen(true);
                setProfileModalOpen(false);
              }}
            >
              <InactiveAlarmIcon width="20" height="20" />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
              onClick={() => {
                setProfileModalOpen(true);
                setAlarmModalOpen(false);
              }}
            >
              <img
                src={data?.imageUrl}
                alt="profile"
                className="object-cover rounded-full h-7 w-7"
              />
            </button>
          </div>

          <div className="relative">
            {alarmModalOpen && <AlarmModal />}
            {profileModalOpen && <ProfileModal />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
