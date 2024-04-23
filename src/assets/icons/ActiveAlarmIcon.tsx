import type { SVGProps } from 'react';
const SvgActiveAlarmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#D4D4D4"
      d="M14 11c-.458 0-1-.542-1-1V5c0-2.757-2.243-5-5-5S3 2.243 3 5v5c0 .448-.552 1-1 1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2"
    />
    <circle cx={13} cy={3} r={3} fill="#DC2626" />
  </svg>
);
export default SvgActiveAlarmIcon;
