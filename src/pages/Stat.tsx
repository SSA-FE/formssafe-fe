import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';
import { dummy } from '@/components/Statistic/itemBlock/dummy';
import StatResult from '@/components/Statistic/StatResult';

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
          <StatResult />
        </div>
      </div>
    </>
  );
}

export default Stat;
