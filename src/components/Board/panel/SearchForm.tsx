/* eslint-disable jsx-a11y/label-has-associated-control */
import { SearchIcon } from '@/assets/icons';
import { ChangeEvent, FormEvent } from 'react';

interface SearchFormProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const SearchForm = ({ keyword, setKeyword }: SearchFormProps) => (
  <form
    className="flex items-center w-[480px] h-[50px] px-3 space-x-4 bg-blue-50 rounded-[48px] border border-blue-200"
    onSubmit={(e: FormEvent) => {
      e.preventDefault();
    }}
  >
    <button type="submit">
      <SearchIcon width="32" />
    </button>
    <label htmlFor="searchInput" className="w-full">
      <input
        id="searchInput"
        name="searchInput"
        className="w-full text-[14px] font-bold bg-transparent border-none outline-none text-slate-400 placeholder-neutral-400 m-0 p-0"
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
