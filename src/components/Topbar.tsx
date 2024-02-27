const Topbar = () => {
  return (
    <nav className="w-full h-topbar min-h-16 flex items-center justify-between border-b  border-neutral-300 px-8 py-2 whitespace-nowrap overflow-clip">
      <div className="flex gap-9 align-middle">
        <p className="text-slate-800 text-base font-bold">폼나는 싸패</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center text-neutral-500 rounded-2xl px-4 h-full bg-neutral-200 ">
            v 3.4.1 24/02/13
          </span>
          <span className="flex items-center bg-primaryTag text-primaryTag rounded-2xl px-4 h-full">
            2024 SAFFE FORM PROJECT Create your own Form
          </span>
        </div>
      </div>

      <ul className="flex items-center h-full text-neutral-500 font-normal text-sm gap-4">
        <li className="flex items-center h-full px-8 cursor-pointer">
          <p>리포지토리</p>
        </li>
        <li className="h-full flex justify-center items-center px-8 cursor-pointer">
          <p className="w-100">구성원 소개</p>
        </li>
        <li className="h-full">
          <button className="h-full px-8 bg-black text-white rounded-lg font-bold text-sm">
            바로 작성하기
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
