import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IModal {
  maxWidth: string;
  state: boolean;
  children?: React.ReactNode;
}

const Modal = ({ maxWidth, state, children }: IModal) => {
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
          <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-25 top-0 left-0 fixed">
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
