import { NavLink, useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '@api/userApi';
import { InactiveAlarmIcon, MainLogoIcon } from '@assets/icons';
import { useEffect, useRef, useState } from 'react';

import AlarmModal from './AlarmModal';
import ProfileModal from './ProfileModal';

const Topbar = () => {
  const { data, refetch } = useFetchUserQuery();
  const [alarmModalOpen, setAlarmModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const location = useLocation();
  const modalRef = useRef(null);

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
          data={data}
          refetch={refetch}
        />
      )}
      <nav className="flex items-center justify-between w-full px-8 py-2 bg-transparent h-topbar min-h-16 whitespace-nowrap">
        <NavLink
          className="text-lg font-bold text-slate-600"
          to={location.pathname === '/' ? '/' : '/board'}
        >
          <MainLogoIcon width="80" height="20" />
        </NavLink>

        {location.pathname !== '/' && data && (
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
                  src={data?.imageUrl}
                  alt="profile"
                  className="object-cover rounded-full h-7 w-7"
                />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Topbar;
