const Topbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-2 h-topbar min-h-16 whitespace-nowrap overflow-clip">
      <div className="flex align-middle gap-9">
        <p className="text-base font-bold text-slate-800">폼나는 싸패</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center h-full px-4 text-neutral-500 rounded-2xl bg-neutral-200 ">
            v 3.4.1 24/02/13
          </span>
          <span className="flex items-center h-full px-4 bg-primaryTag text-primaryTag rounded-2xl">
            2024 SAFFE FORM PROJECT Create your own Form
          </span>
        </div>
      </div>

      <ul className="flex items-center h-full gap-4 text-sm font-normal text-neutral-500">
        <li className="flex items-center h-full px-8 cursor-pointer">
          <p>리포지토리</p>
        </li>
        <li className="flex items-center justify-center h-full px-8 cursor-pointer">
          <p className="w-100">구성원 소개</p>
        </li>
        <li className="h-full">
          <button className="h-full px-8 text-sm font-bold text-white bg-black rounded-lg">
            바로 작성하기
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
