import { instance } from '@/api/axios';
import {
  Notification,
  useFetchAllNotificationsQuery,
  useFetchUnreadNotificationsQuery,
} from '@/api/notificationApi';
import { API } from '@/config';
import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface AlarmModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  alarmModalOpen: boolean;
  activeAlarmTap: string;
  setActiveAlarmTap: (value: string) => void;
}

interface Alarm extends Notification {
  title: string;
}

const AlarmModal: FC<AlarmModalProps> = ({
  modalRef,
  alarmModalOpen,
  activeAlarmTap,
  setActiveAlarmTap,
}) => {
  const [top] = useState<number | null>(null); // [1
  const [alarmList, setAlarmList] = useState<Alarm[]>([]);

  const allNotificationsQuery = useFetchAllNotificationsQuery({ top: top });
  const unreadNotificationsQuery = useFetchUnreadNotificationsQuery({
    top: top,
  });

  const [selectedQuery, setSelectedQuery] = useState(allNotificationsQuery);

  useEffect(() => {
    setSelectedQuery(
      activeAlarmTap === '전체'
        ? allNotificationsQuery
        : unreadNotificationsQuery
    );
  }, [activeAlarmTap, allNotificationsQuery, unreadNotificationsQuery]);

  const { data } = selectedQuery;

  useEffect(() => {
    setAlarmList([]);
  }, [selectedQuery]);

  useEffect(() => {
    if (data) {
      const newAlarmList = data.notifications.reduce((acc: Alarm[], alarm) => {
        const match = alarm.content.match(/'([^']*)'(.*)/);

        const title = match![1];
        const content = match![2].trim();

        const dateObject = new Date(alarm.createDate);
        const formattedDate = `${String(dateObject.getMonth() + 1).padStart(2, '0')}/${String(dateObject.getDate()).padStart(2, '0')}`;

        const newAlarm = {
          ...alarm,
          createDate: formattedDate,
          title,
          content,
        };

        const exists = acc.filter((item) => item.id === newAlarm.id).length > 0;

        if (!exists) {
          acc.push(newAlarm);
        }

        return acc;
      }, []);
      console.log(newAlarmList);
      setAlarmList((prevAlarmList) => [...prevAlarmList, ...newAlarmList]);
    }
  }, [data]);

  const handleRead = async (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => {
    const { name } = event.currentTarget;

    try {
      if (name === 'all') {
        await instance.patch(`${API.NOTIFICATION}/read`);
        const updatedAlarmList = alarmList.map((alarm) => ({
          ...alarm,
          isRead: true,
        }));
        setAlarmList(updatedAlarmList);
      } else {
        console.log(event.currentTarget);
        await instance.patch(`${API.NOTIFICATION}/${id}/read`);
        const updatedAlarmList = alarmList.map((alarm) => {
          if (alarm.id === id) {
            return { ...alarm, isRead: true };
          }
          return alarm;
        });
        setAlarmList(updatedAlarmList);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          <button
            name="all"
            onClick={(event) => handleRead(event)}
            className="text-[10px] font-bold whitespace-nowrap text-blue-600 pb-1"
          >
            모두 읽음 표시
          </button>
        </div>
        {alarmList && alarmList.length === 0 ? (
          <div className="flex items-center w-full px-4 py-2 text-xs bg-white h-14 text-slate-400">
            <p>새 알람이 없습니다.</p>
          </div>
        ) : (
          alarmList &&
          alarmList.map((alarm) => (
            <button
              name="single"
              key={alarm.id}
              onClick={(event) => handleRead(event, alarm.id)}
              className="flex flex-col w-full gap-1 px-4 py-2 bg-white h-14"
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
    </div>,
    modalRoot
  );
};

export default AlarmModal;
