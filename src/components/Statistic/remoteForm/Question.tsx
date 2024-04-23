interface QuestionProps {
  question: string;
}
export default function Question(props: QuestionProps) {
  return (
    // <a href="#">
    <div className="flex items-center w-full h-10 pl-4 text-xs border-b cursor-pointer shrink-0 border-slate-100 text-neutral-400 hover:bg-blue-100">
      {props.question}
    </div>
    // </a>
  );
}
