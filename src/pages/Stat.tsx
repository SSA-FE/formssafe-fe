import RemoteForm from '@/components/Statistic/remoteForm/RemoteForm';

function Stat() {
  return (
    <>
      <div className="flex">
        {/* 사이드바 */}
        <div className="w-[19.5rem] h-[calc(200vh-6rem)]">
          <RemoteForm />
        </div>

        {/* 설문지 */}
        <div className="flex-1 flex items-center justify-center bg-blue-50">
          설문지
        </div>
      </div>
    </>
  );
}

export default Stat;
