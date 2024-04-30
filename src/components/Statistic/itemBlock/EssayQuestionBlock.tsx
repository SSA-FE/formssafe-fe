/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import ArrowBottomIcon from '@/assets/icons/arrow-bottom.svg?react';

// 주관식
const EssayQuestionBlock = ({ data: { values } }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`transition-height duration-300 ease-in ${
          isOpen ? `h-[500px]` : 'h-[300px]'
        } overflow-hidden bg-[#F2F6F9] rounded-bl-lg `}
      >
        <div
          ref={contentRef}
          className={`${
            isOpen ? `h-[500px]` : 'h-[300px]'
          } transition-height ease-in duration-300 flex flex-col gap-4 px-4 `}
        >
          <div
            className={`transition-height flex flex-col gap-2  mb-3 overflow-y-scroll h-full`}
          >
            {values.map((value: any) => {
              return (
                <div className="py-2 gap-1 flex flex-col items-start self-stretch justify-between px-4 bg-white border-l-2 border-slate-300 w-[60vw] max-w-[1000px]">
                  <p className="text-xs font-normal text-neutral-400">곽성재</p>
                  <p className="text-xs font-normal text-slate-500">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full bg-white">
        <button
          className="px-20 py-2 rounded-bl-lg rounded-br-lg bg-slate-100"
          onClick={toggleCollapsible}
        >
          {isOpen ? <ArrowUpIcon /> : <ArrowBottomIcon />}
        </button>
      </div>
    </>
  );
};

export default EssayQuestionBlock;
