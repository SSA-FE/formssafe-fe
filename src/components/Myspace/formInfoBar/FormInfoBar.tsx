import { useState, useEffect, useRef } from 'react';
import Calendar from '@components/Myspace/Calendar';
import trophyIcon from '@/assets/icons/trophy-icon.svg';
import infoIcon from '@/assets/icons/info-icon.svg';
import imgIcon from '@/assets/icons/img-icon.svg';
import Tag from '@components/Tag';
import { useForm } from 'react-hook-form';
// import axios from 'axios';

const FormInfoBar = () => {
  const [imgFile, setImgFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>('');
  // const [presignedUrl, setPresignedUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const { register } = useForm();

  const onChangeImg = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
        setFileName(file.name);
        try {
          // const response = await axios.get(
          //   `{{base_url}}/v1/files/upload/${encodeURIComponent(fileName)}`
          // );
          // setPresignedUrl(response.data.path);
        } catch (err) {
          console.error(err);
        }
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

  // const handleUpdateFormData = (data) => {
  //   console.log(data);
  // };

  return (
    <div
      // onBlur={handleSubmit(handleUpdateFormData)}
      className={`drop-shadow-md w-[19rem] ml-auto h-[calc(100vh-8rem)] bg-white flex flex-col content-center self-stretch relative duration-1000 ease-in-out z-50 ${isHidden ? '-translate-x-[19rem]' : ''}`}
    >
      <button
        type="button"
        onClick={handleSlideButtonClick}
        className="absolute flex justify-center items-center bg-white -right-10 top-7 rounded"
      >
        <div className="text-slate-300 pl-4 pr-3 pb-2 text-3xl">
          {isHidden ? '\u00BB' : '\u00AB'}
        </div>
      </button>

      {/* 대표 이미지 */}
      <div className="w-full p-4 flex flex-col gap-2.5 border-b-4 border-slate-100">
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
          {...register('title')}
          type="text"
          placeholder="제목을 작성해주세요."
          className="p-2 text-xs border outline-none resize-none border-slate-200 bg-slate-50 rounded"
        />
        <textarea
          {...register('description')}
          className="flex flex-col h-16 p-2 text-xs border outline-none resize-none gap-md border-slate-200 bg-slate-50 rounded"
          placeholder="설명을 작성해주세요."
        />
      </div>

      {/* 태그 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-md text-sm">
        <h2 className="font-bold text-neutral-500">태그</h2>
        <Tag />
      </div>

      {/* 마감 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-6 border-b-4 border-slate-100 text-sm">
        <h2 className="font-bold text-neutral-500 mb-2">마감일</h2>
        <Calendar />
      </div>

      {/* 경품정하기 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-4 gap-xs border-b-4 border-slate-100">
        <h2 className="flex font-bold text-neutral-600 gap-x-2">
          <img src={trophyIcon} alt="경품 아이콘" className="w-3" />
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
