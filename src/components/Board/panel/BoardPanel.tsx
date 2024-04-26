import { useState } from 'react';
import SortButton from './SortButton';
import SearchForm from './SearchForm';

const BoardPanel = () => {
  const [selectedButton, setSelectedButton] = useState('최근에 작성된 설문지');
  const [keyword, setKeyword] = useState('');

  const buttons = ['최근에 작성된 설문지', '인기있는 설문지', '마감임박'];
  const handleKeyword = () => {
    console.log(keyword);
  };

  return (
    <div className="w-full h-[140px]  flex flex-col items-center justify-evenly  border-b border-neutral-200">
      <div className="flex justify-between w-[480px] h-12">
        {buttons.map((button, index) => (
          <SortButton
            key={index}
            button={button}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        ))}
      </div>
      <div className="w-[640px] h-[60px] bg-bgColor  rounded-[48px]">
        <SearchForm
          keyword={keyword}
          setKeyword={setKeyword}
          handleKeyword={handleKeyword}
        />
      </div>
    </div>
  );
};

export default BoardPanel;
