import type { SVGProps } from 'react';
const SvgStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#64748b">
      <path
        fillRule="evenodd"
        d="M15.401 7.5H19a.5.5 0 0 0 0-1h-3.959c.06.359.185.696.36 1m-2.172 0q-.152-.481-.204-1H5a.5.5 0 0 0 0 1zM5 11.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1z"
        clipRule="evenodd"
      />
      <circle cx={18} cy={6} r={3} />
    </g>
  </svg>
);
export default SvgStatusIcon;
