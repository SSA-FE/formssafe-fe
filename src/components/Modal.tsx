import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  maxWidth: string;
  state: boolean;
  children: ReactNode;
};

const Modal = ({ maxWidth, state, children }: ModalProps) => {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (state) {
      // 모달이 열리기 전에 현재 포커스된 요소를 저장
      previousActiveElement.current = document.activeElement as HTMLElement;

      // 모달이 열릴 때 포커스를 모달로 이동
      const modalOverlay = document.getElementById('modal-overlay');
      if (modalOverlay) {
        modalOverlay.focus();
      }

      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;
      `;
    } else if (previousActiveElement.current) {
      // 모달이 닫힐 때 이전 포커스된 요소로 포커스를 되돌림
      previousActiveElement.current.focus();
      previousActiveElement.current = null;
    }

    return () => {
      if (state) {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    };
  }, [state]);

  return (
    <>
      {state &&
        createPortal(
          <div
            id="modal-overlay"
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-25"
            tabIndex={-1}
          >
            <div
              className={`flex flex-col w-full ${maxWidth} bg-white rounded-lg px-8 pt-8 pb-8`}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
