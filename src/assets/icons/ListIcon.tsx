import type { SVGProps } from 'react';
const SvgListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1C274C"
      fillRule="evenodd"
      d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7"
      clipRule="evenodd"
    />
    <path
      fill="#1C274C"
      d="M3.25 12a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      opacity={0.7}
    />
    <path
      fill="#1C274C"
      d="M3.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
      opacity={0.4}
    />
  </svg>
);
export default SvgListIcon;
