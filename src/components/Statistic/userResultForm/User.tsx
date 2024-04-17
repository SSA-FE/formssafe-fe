function User() {
  return (
    <div className="w-full h-[40px] flex items-center gap-4 pl-2 border-b border-slate-100">
      <img
        className="w-[26px] h-[26px] bg-blue-400 rounded-full"
        alt="profile"
      />
      <div className="flex items-center gap-2.5 text-slate-500 text-xs">
        이름
      </div>
    </div>
  );
}

export default User;
