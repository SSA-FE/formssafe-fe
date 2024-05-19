import type { SVGProps } from 'react';
const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    style={{
      shapeRendering: 'auto',
      display: 'block',
      background: '0 0',
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <g transform="translate(78 50)">
      <circle r={6} fill="#60a5fa">
        <animateTransform
          attributeName="transform"
          begin="-0.875s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.875s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(45 -49.355 119.154)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.875}>
        <animateTransform
          attributeName="transform"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(90 -14 64)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.75}>
        <animateTransform
          attributeName="transform"
          begin="-0.625s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.625s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(135 .645 41.154)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.625}>
        <animateTransform
          attributeName="transform"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(180 11 25)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.5}>
        <animateTransform
          attributeName="transform"
          begin="-0.375s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.375s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(-135 21.355 8.846)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.375}>
        <animateTransform
          attributeName="transform"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(-90 36 -14)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.25}>
        <animateTransform
          attributeName="transform"
          begin="-0.125s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.125s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(-45 71.355 -69.154)">
      <circle r={6} fill="#60a5fa" fillOpacity={0.125}>
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.08 1.08;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
  </svg>
);
export default SvgSpinner;
