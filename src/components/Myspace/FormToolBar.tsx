const FormToolBar = () => {
  return (
    <div className="bg-white flex w-full px-8 h-12 whitespace-nowrap justify-between items-start">
      <div>
        <p className="text-xs text-blue-400 px-4 py-1 bg-blue-50 border border-blue-200">
          2024/05/05에 마지막으로 수정됨
        </p>
      </div>
      <div className="flex gap-md">
        <button className="border px-8 py-2 text-xs font-bold text-slate-400 rounded-full h-9 hover:bg-slate-50">
          미리보기
        </button>
        <button className="border px-8 py-2 text-xs font-bold text-slate-400 rounded-full h-9 hover:bg-slate-50">
          임시저장
        </button>
        <button className="shadow-md px-8 py-2 text-xs font-bold text-white bg-blue-500 rounded-full h-9 hover:bg-blue-400">
          발행하기
        </button>
      </div>
    </div>
  );
};

export default FormToolBar;
