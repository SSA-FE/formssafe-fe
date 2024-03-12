import { useEffect, useRef, useState } from 'react';

interface ITag {
  id: string;
  value: string;
  bgColor: string;
}

const Tags = () => {
  const [tagValue, setTagValue] = useState('');
  const [tagList, setTagList] = useState<ITag[]>([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputSpanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tagColorList = ['bg-cyan-400', 'bg-indigo-400'];

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
          value: tagValue,
          bgColor:
            tagColorList[Math.floor(Math.random() * tagColorList.length)],
        },
      ]);
      setTagValue('');
    }
  };

  useEffect(() => {
    if (inputRef && inputRef.current && inputSpanRef && inputSpanRef.current) {
      inputRef.current.style.width = `${inputSpanRef.current.getBoundingClientRect().width}px`;
    }
  }, [tagValue]);

  useEffect(() => {
    if (isInputVisible && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  return (
    <div className="flex flex-wrap">
      <ul className="flex flex-wrap gap-y-2">
        {tagList.map((tag) => (
          <li className="mr-2" key={tag.id}>
            <button
              type="button"
              className={`py-2 px-6 rounded ${tag.bgColor} text-xs text-white cursor-pointer hover:bg-rose-400`}
              onClick={() => handleTagRemove(tag.id)}
            >
              # {tag.value}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="px-6 bg-neutral-300 rounded text-white font-bold leading-8"
        onClick={() => setIsInputVisible((prev) => !prev)}
        hidden={tagList.length === 5 || isInputVisible}
      >
        +
      </button>
      <input
        ref={inputRef}
        type={tagList.length === 5 || !isInputVisible ? 'hidden' : 'text'}
        value={tagValue}
        maxLength={10}
        onChange={(e) => setTagValue(e.target.value)}
        onKeyDown={(e) => handleTagAdd(e)}
        onBlur={() => {
          setIsInputVisible((prev) => !prev);
          setTagValue('');
        }}
        className="text-center bg-neutral-300 rounded text-xs text-white focus:outline-none h-8"
      />
      <span
        ref={inputSpanRef}
        className="p-2 bg-neutral-300 rounded text-xs text-white focus:outline-none opacity-0"
      >
        {tagValue}
      </span>
    </div>
  );
};

export default Tags;
