import { useState } from 'react';
import SearchForm from './SearchForm';
import BoardToolbar from '../main/BoardToolbar';

const BoardPanel = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="flex flex-col items-center w-full justify-evenly">
      <div className="my-8">
        <SearchForm keyword={keyword} setKeyword={setKeyword} />
      </div>
      <BoardToolbar />
    </div>
  );
};

export default BoardPanel;
