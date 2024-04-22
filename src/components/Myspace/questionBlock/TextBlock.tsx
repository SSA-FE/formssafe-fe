import { UseFormRegister } from 'react-hook-form';
import { QuestionBlockInputs } from './QuestionBlock';

interface TextBlockProps {
  register: UseFormRegister<QuestionBlockInputs>;
}

const TextBlock = ({ register }: TextBlockProps) => {
  const { ref, ...rest } = register('description');

  const adjustHeight = (element: HTMLTextAreaElement) => {
    element.style.height = '0';
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <div className="flex items-center px-4 py-1 border-l-2 border-l-transparent hover:border-l-slate-200 focus-within:border-l-slate-200 hover:bg-slate-100 focus-within:bg-slate-100">
      <textarea
        ref={(element) => {
          ref(element);
          if (element) {
            adjustHeight(element);
          }
        }}
        {...rest}
        placeholder="기타 설문과 관련한 추가정보, 안내사항 등을 입력할 수 있습니다."
        className="text-slate-500 outline-none bg-transparent w-full focus:bg-slate-50 px-2 py-1 placeholder:text-slate-400 resize-none overflow-hidden"
        onInput={(e) => adjustHeight(e.currentTarget)}
        style={{ overflow: 'hidden' }}
      />
    </div>
  );
};

export default TextBlock;
