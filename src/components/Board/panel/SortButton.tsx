interface SortButtonProps {
  button: string;
  selectedButton: string;
  setSelectedButton: (button: string) => void;
}

const SortButton = ({
  button,
  selectedButton,
  setSelectedButton,
}: SortButtonProps) => (
  <button
    key={button}
    className={`${
      selectedButton === button
        ? ' bg-gray-200 text-neutral-500'
        : ' text-neutral-400'
    } rounded-[56px] font-bold text-sm px-6 py-4 bg-bgColor hover:bg-gray-100 focus:bg-gray-200`}
    onClick={() => setSelectedButton(button)}
  >
    {button}
  </button>
);

export default SortButton;
