import SearchForm from './SearchForm';
import BoardToolbar from '../main/BoardToolbar';

const BoardPanel = () => {
  return (
    <div className="flex flex-col items-center w-full justify-evenly">
      <div className="my-8">
        <SearchForm />
      </div>
      <BoardToolbar />
    </div>
  );
};

export default BoardPanel;
