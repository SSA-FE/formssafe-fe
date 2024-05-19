interface QuestionProps {
  question: string | null;
  number: number;
}
export default function Question(props: QuestionProps) {
  const scrollSmooth = () => {
    const el = document.getElementById(
      '_content' + (props.number - 1).toString()
    );
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button
      onClick={scrollSmooth}
      className="w-[14rem] flex items-center h-10 px-4 text-xs border-b cursor-pointer shrink-0 border-slate-100 text-neutral-400 hover:bg-blue-100"
    >
      <p className="truncate">{props.number + '. ' + props.question}</p>
    </button>
  );
}
