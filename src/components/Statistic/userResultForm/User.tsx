import personIcon from '@assets/icons/person-icon.svg';
interface UserProps {
  name: string;
}

const User = ({ name }: UserProps) => {
  return (
    <div className="w-full h-[40px] flex shrink-0 justify-between items-center gap-4 px-4 border-b border-slate-100 cursor-pointer hover:bg-slate-300">
      <div className="flex items-center gap-4 text-xs text-slate-700">
        <img
          className="w-[20px] h-[20px] rounded-full"
          src={personIcon}
          alt="profile"
        />
        {name}
      </div>

      <div className="flex items-center justify-center h-6 px-4 py-2 font-bold rounded-3xl text-slate-400 bg-slate-200">
        보기
      </div>
    </div>
  );
};

export default User;
