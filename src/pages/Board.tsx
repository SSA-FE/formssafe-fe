import { reset } from '@/components/Board/boardViewSlice';
import BoardCarousel from '@/components/Board/carousel/BoardCarousel';
import BoardMain from '@/components/Board/main/BoardMain';
import BoardPanel from '@/components/Board/panel/BoardPanel';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Board = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === '/board') {
      dispatch(reset());
    }
  }, [path, dispatch]);

  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-r from-slate-50 to-_slate-25">
      <div className="w-[65.625rem] h-full pb-[10rem]">
        <BoardCarousel />
        <BoardPanel />
        <BoardMain />
      </div>
    </div>
  );
};

export default Board;
