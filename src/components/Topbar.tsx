import { useLocation } from 'react-router-dom';
import { useFetchUserQuery } from '@/api/userApi';
import { InactiveAlarmIcon } from '@assets/icons';

const Topbar = () => {
  const location = useLocation();
  const { data } = useFetchUserQuery();

  return (
    <nav className="flex items-center justify-between w-full px-8 py-2 h-topbar min-h-16 whitespace-nowrap overflow-clip">
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
        <div className="flex px-3 py-2 my-1 h-14 w-[124px] items-center justify-between">
          <button className="flex items-center justify-center w-10 h-10 bg-transparent rounded-full cursor-pointer hover:bg-gray-100 focus:bg-gray-100">
            <InactiveAlarmIcon width="20" height="20" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100 focus:bg-gray-100">
            <img
              src={data?.imageUrl}
              alt="profile"
              className="object-cover rounded-full h-7 w-7"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
