/* eslint-disable @typescript-eslint/no-explicit-any */
const Item = ({ data: { type, title, responseCnt }, idx, children }: any) => {
  let nType = '';
  switch (type) {
    case 'multipleChoice':
      nType = '객관식';
      break;
    case 'longAns':
      nType = '장문형';
      break;
    case 'shortAns':
      nType = '단문형';
      break;
    case 'checkBox':
      nType = '체크박스';
      break;
    case 'dropDown':
      nType = '드롭다운';
      break;
    default:
      nType = type;
      break;
  }

  return (
    <div className="flex flex-col pb-4 overflow-hidden rounded-tl-lg rounded-tr-lg">
      <div className="px-4 pt-3 pb-2 bg-slate-100 ">
        <span className="inline-flex flex-row items-center justify-center px-1 text-xs font-bold text-white bg-slate-300">
          {nType}
        </span>
        <div className="flex flex-col gap-1 mt-3">
          <h1 className="text-xl font-bold text-slate-600">
            {`${idx}. ${title}`}
          </h1>
          <h3 className="text-base font-normal text-slate-400">
            응답 {responseCnt}개
          </h3>
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default Item;
