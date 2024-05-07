interface QuestionProps {
  question: string;
  number: number;
}
export default function Question(props: QuestionProps) {
  const scrollSmooth = () => {
    const el = document.getElementById('_content' + props.number.toString());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button
      onClick={scrollSmooth}
      className="w-[14rem] flex items-center h-10 px-4 text-xs border-b cursor-pointer shrink-0 border-slate-100 text-neutral-400 truncate hover:bg-blue-100"
    >
      {props.number + 1 + '. ' + props.question}
    </button>
  );
}
