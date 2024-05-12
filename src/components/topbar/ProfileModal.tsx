import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { API } from '@/config';
import { useCallback, useEffect, useState } from 'react';
import { User } from '@/api/userApi';
import { resetUser } from '@components/topbar/topbarSlice';
import { EditIcon, LogoutIcon } from '@assets/icons';
import { useAppDispatch } from '@/hooks/useAppDispatch';

interface ProfileModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  profileModalOpen: boolean;
  setProfileModalOpen: (open: boolean) => void;
  data: User | undefined;
  refetch: () => void;
}

interface ErrorResponse {
  response?: {
    status: number;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  modalRef,
  profileModalOpen,
  setProfileModalOpen,
  data,
  refetch,
}) => {
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState(data?.nickname || '');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setNickname(data?.nickname || '');
  }, [data]);

  const handleUpdateUser = async (nickname: string) => {
    nickname = nickname.trim().replace(/\s+/g, ' ');
    if (nickname === '') return;
    if (nickname === data?.nickname) return;

    try {
      const response = await instance.patch(`${API.USERS}`, { nickname });
      if (response.status === 200) {
        refetch();
        setErrorMessage('');
        setIsEditing(false);
      }
    } catch (error: unknown) {
      // TODO: error handling
      console.error(error);
      if ((error as ErrorResponse).response?.status === 400) {
        setErrorMessage('이미 사용중인 닉네임입니다.');
      }
    }
  };

  const handleLogout = useCallback(async () => {
    try {
      const response = await instance.get(`${API.AUTH}/logout`);
      if (response.status === 200) {
        setProfileModalOpen(false);
        dispatch(resetUser());
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
      alert('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  }, [navigate]);

  if (!profileModalOpen) return null;

  const modalRoot = document.getElementById('modal-root')!;

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className={`
        fixed
        top-16
        right-10
        border
        rounded-md
        border-slate-200
        h-[240px]
        w-[240px]
        bg-white
        shadow-md
        flex
        flex-col
        px-4
        py-4
        justify-between
      `}
    >
      <div className="flex flex-col items-center w-full gap-2">
        {data?.imageUrl && (
          <img
            src={data.imageUrl}
            alt="profile"
            className="object-cover w-12 h-12 rounded-full"
          />
        )}
        <div className="flex flex-col items-center w-full">
          {isEditing ? (
            <div className="flex space-x-2">
              <input
                value={nickname}
                className="box-border flex-grow font-bold border-2 rounded-md text-slate-800 w-[140px] px-2"
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
          <p className="text-xs text-red-500">{errorMessage}</p>

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
    </div>,
    modalRoot
  );
};

export default ProfileModal;
