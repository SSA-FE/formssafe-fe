import Tag from '@/components/Workspace/Tags';
import Toolbar from '@/components/Workspace/Toolbar';
import Modal from '@/components/modal';
import ArrowSVG from '@assets/icons/arrow-icon.svg?react';
import { useState } from 'react';

const Workspace = () => {
  const [fileName, setFileName] = useState('대표 이미지 설정하기');
  return (
    <div>
      <Toolbar />
      <Modal maxWidth={'max-w-[44rem]'} state={true}>
        <div>
          <h1 className="text-xl font-bold">새로운 설문지를 작성합니다.</h1>
          <h2 className="text-sm text-neutral-500">
            새로운 설문지를 만들기 위한 설정입니다.
          </h2>
          <form className="bg-neutral-50 w-full flex flex-col gap-8 p-4 pb-8 rounded-lg my-6 border border-neutral-200">
            <div>
              <label htmlFor="title">설문지 이름을 입력하세요</label>
              <p className="info-message">
                ⓘ 설문지 이름은 언제라도 수정될 수 있습니다.
              </p>
              <input
                id="title"
                name="title"
                type="text"
                className="input w-full h-8 mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">설문지 설명을 입력하세요</label>
              <p className="info-message">
                ⓘ 설문자가 가장 처음으로 보게될 내용입니다.
              </p>
              <textarea
                id="description"
                name="description"
                className="input w-full h-24 resize-none my-2"
              />
              <div>
                <label
                  htmlFor="file"
                  className="text-xs text-neutral-500 bg-neutral-200 py-2 px-4 rounded-lg cursor-pointer mr-auto inline-block"
                >
                  파일 선택하기
                </label>
                <span className="text-sm text-neutral-500 ml-2">
                  {fileName}
                </span>
              </div>
              <input
                id="file"
                name="file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  setFileName(e.target?.value);
                }}
              />
            </div>
            <div>
              <p className="info-message mb-4">
                ⓘ 태그를 직접 추가할 수 있습니다.
              </p>
              <Tag />
            </div>
          </form>
          <div className="flex justify-between px-2">
            <button className="text-sm text-neutral-400 flex items-center gap-2">
              <ArrowSVG />
              취소하기
            </button>
            <button>확인</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Workspace;
