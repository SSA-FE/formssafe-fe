import { useEffect, useRef, useState } from 'react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import ArrowBottomIcon from '@/assets/icons/arrow-bottom.svg?react';
import { OptionType } from '../StatResult';

interface MultipleChoiceBlockProps {
  data: OptionType;
}

// 주관식
const EssayQuestionBlock = ({ data }: MultipleChoiceBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(false);
  const contentRef = useRef(null);
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const { scrollHeight, clientHeight } =
      scrollBoxRef.current as HTMLDivElement;

    if (scrollHeight > clientHeight) {
      setState(true);
    }
  }, []);

  return (
    <>
      <div
        className={`transition-height duration-300 ease-in ${
          isOpen ? `h-[500px]` : 'h-[300px]'
        } overflow-hidden bg-[#F2F6F9] rounded-bl-lg ${state ? '' : 'rounded-br-lg'}`}
      >
        <div
          ref={contentRef}
          className={`${
            isOpen ? `h-[500px]` : 'h-[300px]'
          } transition-height ease-in duration-300 flex flex-col gap-4 px-4 `}
        >
          <div
            ref={scrollBoxRef}
            className={`transition-height flex flex-col gap-2  mb-3 overflow-y-auto h-full`}
          >
            {(data?.users as string[]).map((user: string, index: number) => {
              return (
                <div
                  key={`${user} + ${index}`}
                  className="py-2 gap-1 flex flex-col items-start self-stretch justify-between px-4 bg-white border-l-2 border-slate-300 w-[60vw] max-w-[1000px]"
                >
                  <p className="text-xs font-normal text-neutral-400">{user}</p>
                  <p className="text-xs font-normal text-slate-500">
                    {data?.values[index]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {state ? (
        <div className="flex flex-row justify-end w-full">
          <button
            className="px-20 py-2 rounded-bl-lg rounded-br-lg bg-slate-100"
            onClick={toggleCollapsible}
          >
            {isOpen ? <ArrowUpIcon /> : <ArrowBottomIcon />}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default EssayQuestionBlock;
