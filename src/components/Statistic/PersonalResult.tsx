import SingleIcon from '@/assets/icons/SingleIcon';
import PersonIcon from '@assets/icons/person-icon.svg?react';
import { resultDummy, answerDummy } from './dummy'; // 더미 데이터

const PersonalResult = ({ userId = 1 }: { userId: number }) => {
  const data = answerDummy.totalResponses.filter(
    (x) => x.user.id === userId
  )[0];
  const responses = data.responses;
  const user = data.user;

  return (
    <div className="flex flex-col w-5/6 gap-6 px-8 py-8 shadow-md bg-slate-50 max-w-7xl">
      <div>
        <div className="flex items-center justify-end gap-2">
          <PersonIcon />
          <p className="text-sm font-semibold text-slate-500">
            {user.nickname}
          </p>
        </div>
      </div>
      {resultDummy.contents.map((content, index) => {
        if (content.type === 'short' || content.type === 'long') {
          return (
            <div className="flex flex-col gap-4 px-4 pt-4 pb-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-slate-600">
                  {`${index}. ${content.title}`}
                </h3>
                <p className="text-base font-normal text-slate-400">
                  {content.description}
                </p>
              </div>
              <div className="px-2 py-1 border min-h-20 bg-slate-100 border-slate-400 text-slate-600">
                <p>{responses[index - 1].content}</p>
              </div>
            </div>
          );
        } else if (
          content.type === 'single' ||
          content.type === 'dropdown' ||
          content.type === 'checkbox'
        ) {
          return (
            <div className="flex flex-col gap-4 px-4 pt-10 pb-4">
              <div className="flex flex-col gap-1 pb-2">
                <h3 className="text-xl font-bold text-slate-600">
                  {`${index}. ${content.title}`}
                </h3>
                <p className="text-base font-normal text-slate-400">
                  {content.description}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {content.options?.map((option, optionIdx) => {
                  if (typeof responses[index - 1].content === 'object') {
                    // 체크박스의 경우
                    return (
                      <div
                        className={`${responses[index - 1].content.includes(String(optionIdx + 1)) ? 'bg-slate-100' : 'white'}  flex items-center gap-4 px-4 py-2`}
                      >
                        <SingleIcon
                          strokeColor={`${responses[index - 1].content.includes(String(optionIdx + 1)) ? '#94A3B8' : '#CBD5E1'}`}
                        />
                        <p className="w-4/5 text-sm font-normal text-slate-600">
                          {option.detail}
                        </p>
                      </div>
                    );
                  } else {
                    // 체크박스 외의 경우
                    return (
                      <div
                        className={`${Number(responses[index - 1].content) === optionIdx + 1 ? 'bg-slate-100' : 'white'}  flex items-center gap-4 px-4 py-2`}
                      >
                        <SingleIcon
                          strokeColor={`${Number(responses[index - 1].content) === optionIdx + 1 ? '#94A3B8' : '#CBD5E1'}`}
                        />
                        <p className="w-4/5 text-sm font-normal text-slate-600">
                          {option.detail}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PersonalResult;
