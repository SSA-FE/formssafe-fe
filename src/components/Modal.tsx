import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  maxWidth: string;
  state: boolean;
  children: ReactNode;
};

const Modal = ({ maxWidth, state, children }: ModalProps) => {
  useEffect(() => {
    if (!state) return;
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [state]);

  return (
    <>
      {state &&
        createPortal(
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-25">
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
