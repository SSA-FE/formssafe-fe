import { useState, useEffect, useRef } from 'react';
import Calendar from '@components/Myspace/Calendar';
import trophyIcon from '@/assets/icons/trophy-icon.svg';
import infoIcon from '@/assets/icons/info-icon.svg';
import imgIcon from '@/assets/icons/img-icon.svg';

const FormInfoBar = () => {
  const [imgFile, setImgFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
        setFileName(file.name);
      } else {
        setImgFile(null);
      }
    }
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(imgFile);
    } else {
      setPreview(null);
    }
  }, [imgFile]);

  const handleImgButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSlideButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`border-r border-slate-200 w-[19rem] ml-auto h-[calc(100vh-8rem)] bg-white flex flex-col content-center self-stretch relative border-r  duration-1000 ease-in-out z-50 ${isHidden ? '-translate-x-[19rem]' : ''}`}
    >
      <button
        className="absolute w-10 h-10 text-3xl bg-white border-r rounded-r -right-10 top-7 border-y text-slate-300"
        onClick={handleSlideButtonClick}
      >
        {isHidden ? '\u00BB' : '\u00AB'}
      </button>

      {/* 대표 이미지 */}
      <div className="w-full px-4 flex flex-col gap-2.5 pt-3 pb-4 border-b-4 border-slate-100">
        <h2 className="flex gap-[0.75rem] font-bold leading-6 text-neutral-600">
          <img src={imgIcon} alt="대표 이미지 아이콘" />
          대표 이미지
        </h2>
        <div className="flex flex-row gap-x-2">
          <div>
            {imgFile && (
              <img
                src={preview as string}
                alt="preview-img"
                className="object-contain w-6 h-6 max-w-6"
              />
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onChangeImg}
            className="hidden"
          />
          <button
            className="bg-neutral-100 px-3.5 py-1 rounded-lg flex items-center justify-center text-xs whitespace-nowrap"
            onClick={handleImgButtonClick}
          >
            파일 선택하기
          </button>
          {fileName && (
            <span className="w-full truncate text-neutral-400">{fileName}</span>
          )}
        </div>
      </div>

      {/* 설문지 정보 */}
      <div className="w-full px-4 flex flex-col gap-2.5 pt-3 pb-4">
        <h2 className="flex gap-[0.75rem] font-bold leading-6 text-neutral-600">
          <img src={infoIcon} alt="설문지 정보 아이콘" />
          설문지 정보
        </h2>
        <input
          type="text"
          placeholder="폼나는 싸패 첫 설문지"
          className="p-2 text-xs border outline-none resize-none border-slate-200 bg-slate-50"
        />
      </div>

      {/* 설명 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs">
        <h2 className="font-bold text-neutral-400">설명</h2>
        <textarea
          className="flex flex-col h-16 p-2 text-xs border outline-none resize-none gap-md border-slate-200 bg-slate-50"
          placeholder="설명을 입력하세요."
        />
      </div>

      {/* 태그 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-md">
        <h2 className="font-bold text-neutral-400">태그</h2>
        <div className="flex flex-col overflow-x-scroll scrollbar gap-sm whitespace-nowrap">
          <div className="flex pb-4 gap-sm">
            <button className="text-xs text-nowrap">생성버튼</button>
            <button className="h-6 px-4 text-xs text-white rounded text-nowrap bg-neutral-400">
              생성버튼
            </button>
          </div>
        </div>
      </div>

      {/* 마감 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4">
        <h2 className="font-bold text-neutral-400">마감일</h2>
        <Calendar />
      </div>

      {/* 경품정하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs bg-blue-50">
        <h2 className="flex text-sm font-bold text-mainColor gap-x-2">
          <img src={trophyIcon} alt="경품 아이콘" />
          경품 정하기
        </h2>
        <div className="flex flex-col gap-md">
          <p className="text-xs text-orange-400">
            &#9432; 경품을 정해서 설문자를 모아보세요.
          </p>
          <button className="w-full text-sm bg-neutral-200 text-neutral-400 h-7">
            설정
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInfoBar;
