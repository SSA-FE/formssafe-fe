import { SearchIcon } from '@/assets/icons';
import { useState, KeyboardEvent, ChangeEvent } from 'react';

interface Tag {
  id: number;
  text: string;
}

const SearchForm = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTag = (text: string) => {
    setTags([...tags, { id: Date.now(), text }]);
    setInput('');
  };

  const removeTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.startsWith('#')) {
        addTag(input);
      }
    }
  };

  const handleTagInteraction = (
    id: number,
    e:
      | React.KeyboardEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' &&
        (e as React.KeyboardEvent<HTMLButtonElement>).key === 'Enter')
    ) {
      removeTag(id);
    }
  };

  return (
    <form className="flex items-center w-[480px] h-[50px] px-3 space-x-2 bg-blue-50 rounded-[48px] border border-blue-200 shadow-sm">
      <div className="flex-shrink-0">
        <SearchIcon width="32" />
      </div>
      {tags.map((tag) => (
        <button
          key={tag.id}
          className="flex items-center justify-center text-xs font-bold rounded-xl text-slate-200 bg-slate-400 py-0 px-2 h-6 cursor-pointer whitespace-nowrap"
          onClick={(e) => handleTagInteraction(tag.id, e)}
          onKeyDown={(e) => handleTagInteraction(tag.id, e)}
        >
          {tag.text}
        </button>
      ))}
      <input
        className="w-full h-6 text-[14px] font-bold bg-transparent border-none outline-none text-slate-400 placeholder-neutral-400 m-0 p-0 leading-6"
        placeholder={tags.length === 0 ? '설문을 검색해보세요.' : ''}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </form>
  );
};

export default SearchForm;
