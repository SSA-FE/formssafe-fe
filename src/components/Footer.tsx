import { FooterLogoIcon } from '@/assets/icons';

const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-8 px-16 pt-2 h-footer bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="flex items-center w-full h-12 space-x-2 border-b border-slate-200">
        <p className="text-sm font-bold text-slate-600">공지사항</p>
        <div className="flex space-x-2">
          <span className="bg-blue-500 rounded-xl text-white px-2 py-[1px] font-bold text-[10px] flex justify-center items-center">
            MAIN
          </span>
          <p className="font-bold text-[10px] text-slate-600">
            폼나는 싸패는 2024년 05월 24일에 정식 배포되었습니다.
          </p>
        </div>
      </div>
      <div className="flex justify-between text-xs text-slate-600">
        <div className="flex space-x-7">
          <div className="min-w-[150px]">
            <FooterLogoIcon width="150" />
          </div>
          <p className="flex items-center justify-center">
            이메일 ssafe.dev@gmail.com | 연락처 010-3107-1487
            <br />
            <br />
            본 사이트의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포
            등을 금합니다.
            <br />
            Copyright © SSAFE 2024 All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold text-slate-800">SNS</span>
          <ul className="flex flex-col gap-2 text-xs text-slate-600">
            <li>
              <a
                href="https://kwakseongjae.notion.site/33246b4a66a64cde943d513ca774faf9?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SSA-FE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Figma
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
