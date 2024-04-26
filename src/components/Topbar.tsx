import { NavLink, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '@/api/userApi';
import {
  EditIcon,
  InactiveAlarmIcon,
  LogoutIcon,
  MainLogoIcon,
} from '@assets/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';

const Topbar = () => {
  const { data, refetch } = useFetchUserQuery();
  const [alarmModalOpen, setAlarmModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const location = useLocation();
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleAlarmButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (alarmModalOpen) {
      setAlarmModalOpen(false);
    } else {
      setAlarmModalOpen(true);
      setProfileModalOpen(false);
    }
  };

  const handleProfileButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (profileModalOpen) {
      setProfileModalOpen(false);
    } else {
      setProfileModalOpen(true);
      setAlarmModalOpen(false);
    }
  };

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

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
      alert('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  }, [navigate]);

  const AlarmModal = () => (
    <div
      ref={modalRef}
      className="absolute z-9999 top-full right-0 border rounded-md border-slate-200 h-[244px] w-[320px] bg-white py-1 shadow-md  box-content overflow-y-auto"
    ></div>
  );

  const ProfileModal = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [nickname, setNickname] = useState(data?.nickname || '');

    useEffect(() => {
      setNickname(data?.nickname || '');
    }, [data]);

    const handleUpdateUser = async (nickname: string) => {
      try {
        const response = await instance.patch(`${API.USERS}`, { nickname });
        if (response.status === 200) {
          refetch();
          setIsEditing(false);
        }
      } catch (error) {
        // TODO: error handling
        console.error(error);
        setNickname(data?.nickname || '');
        setIsEditing(false);
      }
    };

    return (
      <div
        ref={modalRef}
        className="absolute top-full right-0 border rounded-md border-slate-200 h-[240px] w-[240px] bg-white shadow-md flex flex-col px-4 py-4 justify-between"
      >
        <div className="flex flex-col items-center w-full gap-2">
          <img
            src={data?.imageUrl}
            alt="profile"
            className="object-cover w-12 h-12 rounded-full"
          />
          <div className="flex flex-col items-center w-full">
            {isEditing ? (
              <div className="flex space-x-2">
                <input
                  value={nickname}
                  className="box-border flex-grow font-bold border-2 rounded-md text-slate-800 w-[160px] px-2"
                  onChange={(e) =>
                    setNickname((e.target as HTMLInputElement).value)
                  }
                />
                <button
                  className="flex-shrink-0 h-full px-3 text-white bg-blue-500 rounded-md"
                  onClick={() => handleUpdateUser(nickname)}
                >
                  적용
                </button>
              </div>
            ) : (
              <h1 className="font-bold text-slate-800">{nickname}</h1>
            )}
            <p className="text-xs text-slate-800">{data?.email}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center h-8"
            onClick={() => setIsEditing(true)}
          >
            <div className="flex items-center justify-center w-8 h-8">
              <EditIcon width="18" height="18" />
            </div>
            <p className="text-xs text-left">닉네임 변경</p>
          </button>
          <button className="flex items-center h-8" onClick={handleLogout}>
            <div className="flex items-center justify-center w-8 h-8">
              <LogoutIcon width="22" height="22" />
            </div>
            <p className="text-xs text-left text-red-500">로그아웃</p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between w-full px-8 py-2 h-topbar min-h-16 whitespace-nowrap">
      <NavLink
        className="text-lg font-bold text-slate-600"
        to={location.pathname === '/' ? '/' : '/board'}
      >
        <MainLogoIcon width="100" />
      </NavLink>

      {location.pathname !== '/' && data && (
        <div className="relative">
          <div className="flex px-3 py-2 my-1 h-14 w-[124px] items-center justify-between">
            <button
              className={`flex items-center justify-center w-10 h-10 bg-transparent rounded-full cursor-pointer hover:bg-gray-100 ${alarmModalOpen ? 'focus:bg-gray-200' : ''}`}
              onClick={handleAlarmButtonClick}
            >
              <InactiveAlarmIcon width="20" height="20" />
            </button>
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100 ${profileModalOpen ? 'focus:bg-gray-200' : ''}`}
              onClick={handleProfileButtonClick}
            >
              <img
                src={data?.imageUrl}
                alt="profile"
                className="object-cover rounded-full h-7 w-7"
              />
            </button>
          </div>

          <div className="relative">
            <div className="relative">
              {alarmModalOpen && <AlarmModal />}
              {profileModalOpen && <ProfileModal />}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
