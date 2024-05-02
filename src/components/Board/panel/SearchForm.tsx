import { SearchIcon } from '@/assets/icons';
import { useState, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import {
  setKeyword,
  setTag,
  removeTag,
} from '@components/Board/boardViewSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useAppDispatch } from '@hooks/useAppDispatch';

interface Tag {
  id: number;
  text: string;
}

const SearchForm = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  const dispatch = useAppDispatch();

  const boardView = useSelector((state: RootState) => state.boardView);

  useEffect(() => {
    console.log(boardView);
  }, [boardView]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTag = (text: string) => {
    setTags([...tags, { id: Date.now(), text }]);
  };

  const removeTagFromState = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));

    const tagToRemove = tags.find((tag) => tag.id === id);
    if (!tagToRemove) return;

    const sanitizedInput = tagToRemove.text.slice(1).replace(/\s/g, '');
    dispatch(removeTag(sanitizedInput));
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.startsWith('#') && tags.some((tag) => tag.text === input)) {
        setInput('');
        return;
      }

      if (input.startsWith('#')) {
        addTag(input);
        const sanitizedInput = input.slice(1).replace(/\s/g, '');
        dispatch(setTag(sanitizedInput));
      } else {
        dispatch(setKeyword(input));
      }
      setInput('');
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
      removeTagFromState(id);
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
          className="flex items-center justify-center h-6 px-2 py-0 text-xs font-bold cursor-pointer rounded-xl text-slate-200 bg-slate-400 whitespace-nowrap"
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
