import plusIcon from '@/assets/icons/plus-icon.svg';

const FormMain = () => {
  const numQuestions = [1, 2, 3]; // 반복할 질문 블록의 수

  return (
    <div className="flex-1 w-full h-full px-4">
      <div className="flex flex-col gap-sm">
        {numQuestions.map((_, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border divide-y rounded-lg border-neutral-200"
          >
            <div className="flex flex-col px-4 py-2 gap-sm">
              <p className="text-lg text-neutral-400">무슨 질문인가요?</p>
              <input
                className="text-sm font-bold outline-none text-neutral-400"
                type="text"
                placeholder="설명을 입력하세요."
              />
            </div>
            <button className="w-full py-2 text-sm text-neutral-400">
              질문을 추가하세요
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-6">
        <div className="w-8 h-8 rounded-full bg-[#d9d9d9] flex justify-center items-center">
          <img
            src={plusIcon}
            alt="설문추가 아이콘"
            className="w-[19px] h-[19px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FormMain;
