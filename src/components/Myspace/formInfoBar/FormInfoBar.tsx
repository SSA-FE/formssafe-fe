import { useState, useEffect, useRef } from 'react';
import Calendar from '@components/Myspace/Calendar';
import trophyIcon from '@/assets/icons/trophy-icon.svg';
import infoIcon from '@/assets/icons/info-icon.svg';
import imgIcon from '@/assets/icons/img-icon.svg';
import Tag from '@components/Tag';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFormMetaData } from '@/components/Myspace/formInfoBar/formInfoSlice';
import { useFetchPresignedUrlQuery } from '@/api/fileApi';
import Modal from '@/components/Modal';

interface FormInfoInputs {
  title: string;
  description: string;
  expectTime: number;
  rewardName: string;
  rewardCategory: string;
  rewardCount: number;
}

const FormInfoBar = () => {
  const [imgFile, setImgFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [tagList, setTagList] = useState<Tag[]>([]);
  const [endDate, setEndDate] = useState<Date | null>(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );
  const [showRewardModal, setShowRewardModal] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm<FormInfoInputs>();
  const expectTimeValue = watch('expectTime', 5);

  const { data: presignedData } = useFetchPresignedUrlQuery(fileName, {
    skip: !fileName,
  });

  const categoryList = [
    '커피/음료',
    '상품권',
    '편의점',
    '치킨/피자/햄버거',
    '기타',
  ];

  const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image')) {
        setImgFile(file);
        setFileName(file.name);
      } else {
        setImgFile(null);
        setFileName('');
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

  const handleSetFormData: SubmitHandler<FormInfoInputs> = (data) => {
    dispatch(
      setFormMetaData({
        title: data.title,
        description: data.description,
        tags: tagList.map((tag) => tag.value),
        endDate: endDate?.toISOString(),
        expectTime: data.expectTime,
        image: [presignedData?.path as string],
      })
    );
  };

  const handleSetRewardData: SubmitHandler<FormInfoInputs> = (data) => {
    dispatch(
      setFormMetaData({
        reward: {
          name: data.rewardName,
          category: data.rewardCategory,
          count: data.rewardCount,
        },
      })
    );
    setShowRewardModal(false);
  };

  return (
    <div
      onBlur={handleSubmit(handleSetFormData)}
      className={`drop-shadow-md w-[19rem] ml-auto h-[calc(100vh-8rem)] bg-white flex flex-col content-center self-stretch relative duration-1000 ease-in-out z-1 ${isHidden ? '-translate-x-[19rem]' : ''}`}
    >
      <button
        type="button"
        onClick={() => setIsHidden(!isHidden)}
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
            className="bg-blue-300 text-white px-3.5 py-1 rounded-lg flex items-center justify-center text-xs whitespace-nowrap"
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
      <div className="w-full px-4 flex flex-col gap-2.5 pt-3 pb-6">
        <h2 className="flex gap-[0.75rem] font-bold leading-6 text-neutral-600">
          <img src={infoIcon} alt="설문지 정보 아이콘" />
          설문지 정보
        </h2>
        <input
          {...register('title')}
          type="text"
          placeholder="제목을 작성해주세요."
          className="p-2 text-xs border outline-none resize-none border-slate-200 bg-slate-50 rounded focus:border-blue-400"
        />
        <textarea
          {...register('description')}
          className="flex flex-col h-16 p-2 text-xs border outline-none resize-none gap-md border-slate-200 bg-slate-50 rounded focus:border-blue-400"
          placeholder="설명을 작성해주세요."
        />
      </div>

      {/* 태그 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-6 gap-md text-sm">
        <h2 className="font-bold text-neutral-500">태그</h2>
        <Tag tagList={tagList} setTagList={setTagList} />
      </div>

      {/* 예상소요시간 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-7 gap-md text-sm">
        <div className="flex justify-between items-end font-bold text-neutral-500">
          <h2>예상소요시간</h2>
          <label htmlFor="survey-time-range">
            <span className="text-blue-400 text-lg mr-1">
              {expectTimeValue}
            </span>
            <span>분</span>
          </label>
        </div>
        <input
          {...register('expectTime')}
          type="range"
          id="survey-time-range"
          min="1"
          max="60"
          step="1"
          defaultValue="5"
          className="appearance-none h-3 cursor-pointer bg-slate-100 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-300"
        />
      </div>

      {/* 마감 */}
      <div className="flex flex-col w-full px-4 pt-3 pb-6 border-b-4 border-slate-100 text-sm">
        <h2 className="font-bold text-neutral-500 mb-2">마감일</h2>
        <Calendar endDate={endDate} setEndDate={setEndDate} />
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
          <button
            onClick={() => setShowRewardModal(true)}
            className="w-full text-sm bg-blue-300 text-white h-7 rounded"
          >
            설정
          </button>
        </div>
      </div>
      <Modal maxWidth="max-w-[30rem]" state={showRewardModal}>
        <form
          onSubmit={handleSubmit(handleSetRewardData)}
          className="relative flex flex-col gap-4"
        >
          <button
            onClick={() => setShowRewardModal(false)}
            className="absolute right-0 top-0 text-neutral-600"
          >
            X
          </button>
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            설문 보상을 선택하세요.
          </h2>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="rewardName"
              className="text-sm font-medium text-slate-600"
            >
              보상 이름
            </label>
            <input
              {...register('rewardName', { required: true })}
              type="text"
              id="rewardName"
              placeholder="예) 스타벅스 아메리카노"
              className="p-2 text-xs border outline-none resize-none border-slate-200 bg-slate-50 rounded focus:border-blue-400"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="rewardCategory"
              className="text-sm font-medium text-slate-600"
            >
              보상 카테고리
            </label>
            <select
              {...register('rewardCategory', { required: true })}
              id="rewardCategory"
              className="p-2 text-xs border outline-none resize-none border-slate-200 bg-slate-50 rounded focus:border-blue-400"
            >
              <option value="" selected>
                선택하세요
              </option>
              {categoryList.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="rewardCount"
              className="text-sm font-medium text-slate-600"
            >
              보상 수량
            </label>
            <input
              {...register('rewardCount', { required: true })}
              type="number"
              min={1}
              defaultValue={1}
              id="rewardCount"
              className="p-2 text-xs border outline-none resize-none border-slate-200 bg-slate-50 rounded focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-200"
          >
            저장하기
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default FormInfoBar;
