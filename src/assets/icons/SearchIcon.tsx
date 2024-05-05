import type { SVGProps } from 'react';
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <rect width={30} height={30} fill="#60A5FA" rx={15} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.077 17.063 19 19m-.889-4.444a3.556 3.556 0 1 1-7.111 0 3.556 3.556 0 0 1 7.111 0"
    />
  </svg>
);
export default SvgSearchIcon;
