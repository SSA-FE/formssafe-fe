import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface AlarmModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  alarmModalOpen: boolean;
  setAlarmModalOpen: (open: boolean) => void;
}

const AlarmModal: FC<AlarmModalProps> = ({ modalRef, alarmModalOpen }) => {
  if (!alarmModalOpen) return null;

  const modalRoot = document.getElementById('modal-root')!;

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
        h-[244px]
        w-[320px]
        bg-white
        py-1
        shadow-md
        box-content
        overflow-y-auto
      `}
    ></div>,
    modalRoot
  );
};

export default AlarmModal;
