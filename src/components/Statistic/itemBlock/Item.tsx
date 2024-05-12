import { ReactNode } from 'react';

interface Options {
  labels?: string[];
  users: string[];
  values: number[] | string;
}

interface answerData {
  description: string;
  id: string;
  options: Options;
  responseCnt: number;
  title: string;
  type: string;
}

interface ItemProps {
  data: answerData;
  idx: number;
  children: ReactNode;
}

const Item = ({
  data: { type, title, description, responseCnt },
  idx,
  children,
}: ItemProps) => {
  let nType = '';
  switch (type) {
    case 'single':
      nType = '객관식';
      break;
    case 'long':
      nType = '장문형';
      break;
    case 'short':
      nType = '단문형';
      break;
    case 'checkbox':
      nType = '체크박스';
      break;
    case 'dropdown':
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

        <div className="flex flex-col mt-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-slate-600">
              {`${idx}. ${title}`}
            </h1>
            <p className="text-base text-slate-500">{description}</p>
          </div>

          <h3 className="self-end text-base font-normal text-slate-400">
            응답 {responseCnt}개
          </h3>
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default Item;
