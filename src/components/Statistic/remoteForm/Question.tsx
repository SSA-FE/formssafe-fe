interface QuestionProps {
  question: string;
}
export default function Question(props: QuestionProps) {
  return (
    // <a href="#">
    <div className="w-[14rem] flex items-center h-10 px-4 text-xs border-b cursor-pointer shrink-0 border-slate-100 text-neutral-400 truncate hover:bg-blue-100">
      {props.question}
    </div>
    // </a>
  );
}
