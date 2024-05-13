const SvgSingleIcon = ({
  strokeColor = 'currentColor',
}: {
  strokeColor: string;
}) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="10"
      height="10"
      rx="5"
      stroke={strokeColor}
      strokeWidth="4"
    />
  </svg>
);
export default SvgSingleIcon;
