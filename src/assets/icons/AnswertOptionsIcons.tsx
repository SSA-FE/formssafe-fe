import React from 'react';

interface SVGIconProps {
  fillColor?: string;
}

export const SingleIcon: React.FC<SVGIconProps> = ({
  fillColor = '#A3A3A3',
}) => {
  return (
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
        stroke={fillColor}
        strokeWidth="4"
      />
    </svg>
  );
};
export const CheckboxIcon: React.FC<SVGIconProps> = ({
  fillColor = '#A3A3A3',
}) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="2"
        width="10"
        height="10"
        stroke={fillColor}
        stroke-width="4"
      />
    </svg>
  );
};
export const DropdownIcon: React.FC<SVGIconProps> = ({
  fillColor = '#A3A3A3',
}) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 14V0L14.5 7L0.5 14Z" fill={fillColor} />
    </svg>
  );
};
