/* eslint-disable @typescript-eslint/no-explicit-any */
import Item from '@/components/Statistic/itemBlock/Item';
import MultipleChoiceBlock from '@/components/Statistic/itemBlock/MutipleChoiceBlock';
import EssayQuestionBlock from '@/components/Statistic/itemBlock/EssayQuestionBlock';
import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import { dummy } from '@/components/Statistic/itemBlock/dummy';

// type -> multipleChoice, longAns, shortAns, checkBox, dropDown
function Stat() {
  return (
    <>
      <div className="flex">
        {/* 사이드바 */}
        <div className="w-[19.5rem]">
          <RemoteForm data={dummy} />
        </div>

        {/* 설문지 */}
        <div className="flex flex-col items-start justify-start flex-1 h-auto gap-24 pt-4">
          {dummy.map((item: any, index: number) => (
            <div key={'_content' + index} id={'_content' + index}>
              <Item key={index} data={item} idx={index + 1}>
                {item.type === 'longAns' || item.type === 'shortAns' ? (
                  <EssayQuestionBlock data={item.options} />
                ) : (
                  <MultipleChoiceBlock data={item.options} />
                )}
              </Item>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Stat;
