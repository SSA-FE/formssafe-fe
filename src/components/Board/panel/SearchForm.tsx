import { SearchIcon } from '@/assets/icons';
import { useState, ChangeEvent } from 'react';
import {
  setKeyword,
  setTag,
  removeTag,
} from '@components/Board/boardViewSlice';
import { useAppDispatch } from '@hooks/useAppDispatch';

interface Tag {
  id: number;
  text: string;
}

const SearchForm = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const dispatch = useAppDispatch();

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

  const handleInput = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' &&
        (e as React.KeyboardEvent<HTMLInputElement>).key === 'Enter')
    ) {
      e.preventDefault();
      const trimmedInput = input.trim();

      if (trimmedInput.startsWith('#')) {
        if (tags.some((tag) => tag.text === input)) {
          setInput('#');
          return;
        }

        if (trimmedInput.trim() === '#') return;

        addTag(trimmedInput);
        const sanitizedInput = trimmedInput.slice(1).replace(/\s/g, '');
        dispatch(setTag(sanitizedInput));
        setInput('');
      } else {
        dispatch(setKeyword(trimmedInput));
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
      removeTagFromState(id);
    }
  };

  return (
    <form className="flex items-center w-[480px] h-[50px] px-3 space-x-2 bg-blue-50 rounded-[48px] border border-blue-200 shadow-sm">
      <button onClick={handleInput} className="flex-shrink-0">
        <SearchIcon width="32" />
      </button>
      {tags.map((tag) => (
        <button
          key={tag.id}
          className="flex items-center justify-center h-6 px-2 py-0 text-xs font-bold text-white cursor-pointer rounded-xl bg-slate-400 hover:bg-slate-600 whitespace-nowrap"
          onClick={(e) => handleTagInteraction(tag.id, e)}
          onKeyDown={(e) => handleTagInteraction(tag.id, e)}
        >
          {tag.text}
        </button>
      ))}
      <input
        className="w-full h-6 text-[14px] font-bold bg-transparent border-none outline-none text-slate-400 placeholder-neutral-400 m-0 p-0 leading-6"
        placeholder={tags.length === 0 ? '키워드 또는 #해시태그 검색' : ''}
        value={input}
        onChange={handleInputChange}
        onKeyUp={handleInput}
      />
    </form>
  );
};

export default SearchForm;
