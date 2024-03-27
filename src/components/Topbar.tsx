import GoogleProfileIcon from '@/assets/icons/google-profile.svg?react';
import AlarmIcon from '@/assets/icons/alarm.svg?react';

type TopbarProps = {
  isAuthenticated: boolean;
};

const Topbar = ({ isAuthenticated }: TopbarProps) => {
  const onClick = () => {
    console.log('clicked');
  };

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
      {isAuthenticated && (
        <div className="flex px-3 py-2 my-1 h-14 w-[124px] items-center justify-between">
          <button
            className="flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={onClick}
          >
            <AlarmIcon height="16" width="16" />
          </button>
          <button className="cursor-pointer h-7 w-7" onClick={onClick}>
            <GoogleProfileIcon height="28" width="28" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
