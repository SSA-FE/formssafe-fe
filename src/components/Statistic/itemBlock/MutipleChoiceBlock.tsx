import { useEffect, useRef, useState } from 'react';
import UserIcon from '@/assets/icons/user-icon.svg?react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import ArrowBottomIcon from '@/assets/icons/arrow-bottom.svg?react';
import Chart, { ChartData } from '@/components/Statistic/itemBlock/Chart';
import { OptionType, User } from '../StatResult';

interface MultipleChoiceBlockProps {
  data: OptionType;
}

// 객관식
const MultipleChoiceBlock = ({
  data: { labels, users, values },
}: MultipleChoiceBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  const resultBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resultBoxRef.current) {
      if (resultBoxRef.current.offsetHeight === 0) return;
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`px-4 ${isOpen ? `` : `overflow-hidden rounded-bl-lg`} bg-blue-50`}
      >
        <Chart data={{ labels, values } as ChartData} />
      </div>
      <div
        className={`transition-height duration-300 ease-in ${
          isOpen ? `h-[360px] pb-4` : 'h-0'
        } overflow-hidden bg-blue-50 rounded-bl-lg`}
        ref={resultBoxRef}
      >
        <div className="flex flex-col gap-4 px-4 ">
          <hr className="h-[1px] bg-slate-300 border-none" />
          <div className="flex flex-col gap-2 overflow-y-auto h-80">
            {users && (users as User[]).length > 0 ? (
              <>
                {(users as User[]).map((user: User) => {
                  return (
                    <div
                      key={user.userId}
                      className="flex items-center self-stretch justify-between px-4 pt-1 pb-2 bg-white border-l-2 border-slate-300"
                    >
                      <div className="flex flex-row items-center justify-center gap-4 px-2 py-2">
                        <UserIcon />
                        <p className="text-xs font-normal text-slate-500">
                          {user.nickname}
                        </p>
                      </div>
                      <p className="text-xs font-normal text-slate-500">
                        {user.pick.join(', ')} 번
                      </p>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="flex items-center justify-center h-full pb-8">
                <p className="text-lg text-slate-500">
                  현재 응답자가 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full">
        <button
          className="flex items-center justify-center px-20 py-2 rounded-bl-lg rounded-br-lg bg-blue-50"
          onClick={toggleCollapsible}
        >
          {isOpen ? <ArrowUpIcon /> : <ArrowBottomIcon />}
        </button>
      </div>
    </>
  );
};

export default MultipleChoiceBlock;
