import {
  Notification,
  useFetchAllNotificationsQuery,
} from '@/api/notificationApi';
import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface AlarmModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  alarmModalOpen: boolean;
  activeAlarmTap: string;
  setActiveAlarmTap: (value: string) => void;
}

// const data: Notification[] = [
//   {
//     id: 3,
//     type: 'GET_REWARD',
//     content: "'바나나에 대한 설문' 설문의 경품에 당첨되었습니다!",
//     contentId: 26,
//     isRead: false,
//     createDate: '2024-04-30T13:30:01.243007',
//   },
//   {
//     id: 4,
//     type: 'GET_REWARD',
//     content: "'좋아하는 과일을 알려주세요' 설문의 경품에 당첨되었습니다!",
//     contentId: 27,
//     isRead: false,
//     createDate: '2024-04-30T13:30:01.243007',
//   },
// ];

const AlarmModal: FC<AlarmModalProps> = ({
  modalRef,
  alarmModalOpen,
  activeAlarmTap,
  setActiveAlarmTap,
}) => {
  const [top, setTop] = useState<number | null>(null);
  const { data, isLoading } = useFetchAllNotificationsQuery({});

  const alarmList = data?.notifications.map((alarm) => {
    const match = alarm.content.match(/'([^']*)'(.*)/);

    const title = match![1];
    const content = match![2].trim();

    const dateObject = new Date(alarm.createDate);
    const formattedDate = `${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')}`;

    return { ...alarm, createDate: formattedDate, title, content };
  });
  useEffect(() => {
    if (alarmList) {
      console.log(alarmList);
    }
  }, [alarmList]);

  const modalRoot = document.getElementById('modal-root')!;
  if (!alarmModalOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className={`
        fixed
        top-16
        right-[104px]
        border
        rounded-md
        border-slate-200
        w-[320px]
        bg-white
        py-1
        shadow-md
        box-content
        overflow-y-auto
      `}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between pl-2 pr-3 border-b-[1px] border-slate-200">
          <div className="flex w-full space-x-4 text-xs font-bold bg-transparent bg-white ">
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeAlarmTap === '전체' ? 'text-blue-500 border-b-2 border-blue-500 ' : 'text-neutral-400 border-b-2 border-neutral-400'}`}
              onClick={() => {
                setActiveAlarmTap('전체');
              }}
            >
              전체
            </button>
            <button
              className={`px-4 py-2 whitespace-nowrap ${activeAlarmTap === '참여한 설문' ? 'text-blue-500 border-b-2 border-blue-500 ' : 'text-neutral-400 border-b-2 border-neutral-400'}`}
              onClick={() => {
                setActiveAlarmTap('참여한 설문');
              }}
            >
              안읽음
            </button>
          </div>
          <div className="text-[10px] font-bold whitespace-nowrap text-blue-600 pb-1">
            모두 읽음 표시
          </div>
        </div>
        {alarmList && alarmList.length === 0 ? (
          <div className="flex items-center w-full px-4 py-2 text-xs bg-white h-14 text-slate-400">
            <p>새 알람이 없습니다.</p>
          </div>
        ) : (
          alarmList &&
          alarmList.map((alarm) => (
            <button
              key={alarm.id}
              className="flex flex-col w-full gap-1 px-4 py-2 bg-white h-14 "
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="overflow-hidden text-sm text-slate-800 whitespace-nowrap overflow-ellipsis">
                  {alarm.title}
                </h1>
                <p className="text-[10px] text-slate-400 pl-4">
                  {alarm.createDate}
                </p>
              </div>
              <p className="w-full text-xs text-slate-500 text-start">
                {alarm.content}
              </p>
            </button>
          ))
        )}
      </div>
      {/* {alarmList.map((alarm, idx) => (
        <div key={idx} className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <img
              src={alarm.imageUrl}
              alt="알람 이미지"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm">{alarm.content}</p>
          </div>
          <p className="text-xs text-neutral-500">{alarm.time}</p>
        </div>
      ))} */}
    </div>,
    modalRoot
  );
};

export default AlarmModal;
