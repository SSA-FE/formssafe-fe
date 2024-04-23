/* eslint-disable jsx-a11y/label-has-associated-control */
import { SearchIcon } from '@/assets/icons';
import { ChangeEvent, FormEvent } from 'react';

interface SearchFormProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  handleKeyword: () => void;
}

const SearchForm = ({
  keyword,
  setKeyword,
  handleKeyword,
}: SearchFormProps) => (
  <form
    className="flex items-center w-full h-full px-3 space-x-4"
    onSubmit={(e: FormEvent) => {
      e.preventDefault();
      handleKeyword();
    }}
  >
    <button type="submit">
      <SearchIcon width="32" />
    </button>
    <label htmlFor="searchInput" className="w-full">
      <input
        id="searchInput"
        name="searchInput"
        className="w-full text-base font-bold border-none outline-none bg-neutral-100 text-neutral-400 placeholder-neutral-400"
        placeholder="설문을 검색해보세요."
        value={keyword}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeyword(e.target.value)
        }
      />
    </label>
  </form>
);

export default SearchForm;
