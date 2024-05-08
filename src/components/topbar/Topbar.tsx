import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User, useFetchUserQuery } from '@api/userApi';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setUser } from '@components/topbar/topbarSlice';
import { InactiveAlarmIcon, MainLogoIcon } from '@assets/icons';
import { useEffect, useRef, useState } from 'react';

import AlarmModal from './AlarmModal';
import ProfileModal from './ProfileModal';
import { RootState } from '@/store';
import { GOOGLE_AUTH_URL } from '@/config';

const Topbar = () => {
  const { data, isError, refetch } = useFetchUserQuery();
  const [alarmModalOpen, setAlarmModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const user: User = useSelector((state: RootState) => state.topbarSlice);
  const location = useLocation();
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === '/board') {
      refetch();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, location.pathname]);

  const handleModalButtonClick = (
    event: React.MouseEvent,
    modalType: 'alarm' | 'profile'
  ) => {
    event.stopPropagation();
    if (modalType === 'alarm') {
      setAlarmModalOpen(!alarmModalOpen);
      setProfileModalOpen(false);
    } else {
      setProfileModalOpen(!profileModalOpen);
      setAlarmModalOpen(false);
    }
  };

  const handleClickOutside = (
    event: MouseEvent,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (
      modalRef.current &&
      !(modalRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setModalOpen(false);
    }
  };

  const handleLogin = () => {
    if (isError) {
      window.location.href = GOOGLE_AUTH_URL;
    } else {
      navigate('/board');
    }
  };

  useEffect(() => {
    document.addEventListener('click', (event) =>
      handleClickOutside(event, setAlarmModalOpen)
    );
    return () => {
      document.removeEventListener('click', (event) =>
        handleClickOutside(event, setAlarmModalOpen)
      );
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', (event) =>
      handleClickOutside(event, setProfileModalOpen)
    );
    return () => {
      document.removeEventListener('click', (event) =>
        handleClickOutside(event, setProfileModalOpen)
      );
    };
  }, []);

  return (
    <>
      {alarmModalOpen && (
        <AlarmModal
          modalRef={modalRef}
          alarmModalOpen={alarmModalOpen}
          setAlarmModalOpen={setAlarmModalOpen}
        />
      )}
      {profileModalOpen && (
        <ProfileModal
          modalRef={modalRef}
          profileModalOpen={profileModalOpen}
          setProfileModalOpen={setProfileModalOpen}
          data={user}
          refetch={refetch}
        />
      )}
      <nav className="flex items-center justify-between w-full px-8 py-2 bg-transparent h-topbar min-h-16 whitespace-nowrap">
        <div className="flex gap-8 items-center">
          <NavLink className="text-lg font-bold text-slate-600" to="/">
            <MainLogoIcon width="80" />
          </NavLink>
          {location.pathname !== '/' && (
            <div className="flex space-x-4 font-bold text-sm">
              <NavLink to="/board">
                <span
                  className={`${location.pathname === '/board' ? 'text-blue-500 hover:border-b-[1px] hover:border-blue-500' : 'text-slate-800 hover:border-b-[1px] hover:border-slate-800'}  py-0 leading-none inline-block`}
                >
                  보드
                </span>
              </NavLink>
              <NavLink to="/myspace">
                <span
                  className={`${location.pathname === '/myspace' ? 'text-blue-500 hover:border-b-[1px] hover:border-blue-500' : 'text-slate-800 hover:border-b-[1px] hover:border-slate-800'}  py-0 leading-none inline-block`}
                >
                  마이스페이스
                </span>
              </NavLink>
            </div>
          )}
        </div>

        {location.pathname !== '/' && user.imageUrl && (
          <div className="relative">
            <div className="flex px-3 py-2 my-1 h-14 w-[124px] items-center justify-between">
              <button
                className={`flex items-center justify-center w-10 h-10 bg-transparent rounded-full cursor-pointer hover:bg-gray-100 ${alarmModalOpen ? 'focus:bg-gray-200' : ''}`}
                onClick={(event) => handleModalButtonClick(event, 'alarm')}
              >
                <InactiveAlarmIcon width="20" height="20" />
              </button>
              <button
                className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100 ${profileModalOpen ? 'focus:bg-gray-200' : ''}`}
                onClick={(event) => handleModalButtonClick(event, 'profile')}
              >
                <img
                  src={user?.imageUrl}
                  alt="profile"
                  className="object-cover rounded-full h-7 w-7"
                />
              </button>
            </div>
          </div>
        )}
        {location.pathname === '/' && (
          <button
            className="shadow-md flex items-center w-auto px-5 py-2 space-x-2 text-xs font-bold text-white bg-blue-500 rounded-[38px] h-9 whitespace-nowrap"
            onClick={handleLogin}
          >
            <p className="flex items-center p-0 m-0"> 시작하기</p>
          </button>
        )}
      </nav>
    </>
  );
};

export default Topbar;
