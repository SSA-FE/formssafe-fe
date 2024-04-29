import BoardMain from '@/components/Board/main/BoardMain';
import BoardPanel from '@/components/Board/panel/BoardPanel';

const Board = () => {
  return (
    <div className="w-full h-full bg-_bg-home">
      <BoardPanel />
      <BoardMain />
    </div>
  );
};

export default Board;
