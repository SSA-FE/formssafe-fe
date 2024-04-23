import type { SVGProps } from 'react';
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width={32} height={32} fill="#6ED1F9" rx={16} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.634 19.61 23 23m-1.556-7.778a6.222 6.222 0 1 1-12.444 0 6.222 6.222 0 0 1 12.444 0"
    />
  </svg>
);
export default SvgSearchIcon;
