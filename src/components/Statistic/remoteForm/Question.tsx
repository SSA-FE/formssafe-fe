interface QuestionProps {
  question: string;
}
export default function Question(props: QuestionProps) {
  return (
    // <a href="#">
    <div className="w-full h-[40px] flex items-center pl-4 border-b border-slate-100 text-neutral-400 text-xs">
      {props.question}
    </div>
    // </a>
  );
}
