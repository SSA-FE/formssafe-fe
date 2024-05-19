import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Tag {
  id: string;
  value: string;
}

interface TagProps {
  tagList: Tag[];
  setTagList: React.Dispatch<React.SetStateAction<Tag[]>>;
}

const Tag = ({ tagList, setTagList }: TagProps) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const { register, setFocus, getValues, setValue } = useForm();
  const { ref, ...rest } = register('tag');

  const handleTagRemove = (tagId: string) => {
    const newTagList = tagList.filter((tag) => tag.id !== tagId);
    setTagList(newTagList);
  };

  const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTagList([
        ...tagList,
        {
          id: crypto.randomUUID(),
          value: getValues('tag'),
        },
      ]);
      setValue('tag', '');
    }
  };

  useEffect(() => {
    if (isInputVisible) {
      setFocus('tag');
    }
  }, [isInputVisible]);

  const adjustWidth = (element: HTMLInputElement) => {
    element.style.width = '0';
    element.style.width = `${element.scrollWidth}px`;
  };

  return (
    <div className="flex flex-wrap items-center">
      <ul className="flex flex-wrap gap-y-2">
        {tagList.map((tag) => (
          <li className="mr-1" key={tag.id}>
            <button
              type="button"
              className="tag cursor-pointer"
              onClick={() => handleTagRemove(tag.id)}
            >
              {tag.value}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="tag bg-blue-300 text-white"
        onClick={() => setIsInputVisible((prev) => !prev)}
        hidden={tagList.length === 5 || isInputVisible}
      >
        +
      </button>
      <input
        ref={(element) => {
          ref(element);
          if (element) {
            adjustWidth(element);
          }
        }}
        {...rest}
        type={tagList.length === 5 || !isInputVisible ? 'hidden' : 'text'}
        maxLength={10}
        onInput={(e) => adjustWidth(e.currentTarget)}
        onBlur={() => {
          setIsInputVisible(false);
          setValue('tag', '');
        }}
        onKeyPress={(e) => handleTagAdd(e)}
        className="tag px-2 text-white bg-blue-300 focus:outline-none"
      />
    </div>
  );
};

export default Tag;
