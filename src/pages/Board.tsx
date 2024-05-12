import BoardMain from '@/components/Board/main/BoardMain';
import BoardPanel from '@/components/Board/panel/BoardPanel';

const Board = () => {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r from-slate-50 to-_slate-25">
      <div className="w-[1048px] h-full pb-[10rem]">
        <BoardPanel />
        <BoardMain />
      </div>
    </div>
  );
};

export default Board;
