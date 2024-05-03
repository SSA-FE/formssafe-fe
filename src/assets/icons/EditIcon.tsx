import type { SVGProps } from 'react';
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="#F1F5F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 8v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2"
    />
    <path
      stroke="#F1F5F9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.25 7.9 11 3.1 8.9 1 4.15 5.75 4 8z"
    />
  </svg>
);
export default SvgEditIcon;
