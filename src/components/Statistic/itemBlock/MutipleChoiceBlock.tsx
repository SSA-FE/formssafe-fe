/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import UserIcon from '@/assets/icons/user-icon.svg?react';
import OptionIcon from '@/assets/icons/option-icon.svg?react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import ArrowBottomIcon from '@/assets/icons/arrow-bottom.svg?react';
import Chart from '@/components/Statistic/itemBlock/Chart';

// 객관식
const MultipleChoiceBlock = ({ data: { labels, users, values } }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const [height, setHeight] = useState('auto');
  const resultBoxRef = useRef<any>(null);

  useEffect(() => {
    if (resultBoxRef.current) {
      if (resultBoxRef.current.offsetHeight === 0) return;
      setHeight(resultBoxRef.current.offsetHeight + 'px');
      console.log(height);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`px-4 ${isOpen ? `` : `overflow-hidden rounded-bl-lg`} bg-slate-100`}
      >
        <Chart data={{ labels, values }} />
      </div>
      <div
        className={`transition-height duration-300 ease-in ${
          isOpen ? `h-[${height}] pb-4` : 'h-0'
        } overflow-hidden bg-[#F2F6F9] rounded-bl-lg`}
        ref={resultBoxRef}
      >
        <div className="flex flex-col gap-4 px-4 ">
          <div className="flex flex-col gap-2">
            {labels.map((label: string) => {
              return (
                <div className="flex flex-row items-center gap-3">
                  <OptionIcon />
                  <p className="text-sm font-normal text-slate-600">{label}</p>
                </div>
              );
            })}
          </div>

          <hr className="h-[1px] bg-slate-400 text-slate-400" />

          <div className="flex flex-col gap-2 overflow-y-auto h-80">
            <>
              {users.map((user: any) => {
                return (
                  <div className="flex items-center self-stretch justify-between px-4 pt-1 pb-2 bg-white border-l-2 border-slate-300">
                    <div className="flex flex-row items-center justify-center gap-4 px-2 py-2">
                      <UserIcon />
                      <p className="text-xs font-normal text-slate-500">
                        {user.nickname}
                      </p>
                    </div>
                    <p className="text-xs font-normal text-slate-500">
                      {user.pick}번
                    </p>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full">
        <button
          className="flex items-center justify-center px-20 py-2 rounded-bl-lg rounded-br-lg bg-slate-100"
          onClick={toggleCollapsible}
        >
          {isOpen ? <ArrowUpIcon /> : <ArrowBottomIcon />}
        </button>
      </div>
    </>
  );
};

export default MultipleChoiceBlock;
