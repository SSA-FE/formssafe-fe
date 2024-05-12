import React from 'react';

interface SVGIconProps {
  fillColor?: string;
}

export const SingleIcon: React.FC<SVGIconProps> = ({
  fillColor = '#A3A3A3',
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
        fill={fillColor}
      />
      <path
        d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8ZM11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8ZM8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5Z"
        stroke={fillColor}
      />
    </svg>
  );
};
export const CheckboxIcon: React.FC<SVGIconProps> = ({
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
      <mask id="path-2-inside-1_12102_448" fill="white">
        <path d="M0.5 0.5H13.5V13.5H0.5V0.5Z" />
      </mask>
      <path
        d="M0.5 0.5V-0.5H-0.5V0.5H0.5ZM13.5 0.5H14.5V-0.5H13.5V0.5ZM13.5 13.5V14.5H14.5V13.5H13.5ZM0.5 13.5H-0.5V14.5H0.5V13.5ZM0.5 1.5H13.5V-0.5H0.5V1.5ZM12.5 0.5V13.5H14.5V0.5H12.5ZM13.5 12.5H0.5V14.5H13.5V12.5ZM1.5 13.5V0.5H-0.5V13.5H1.5Z"
        fill={fillColor}
        mask="url(#path-1-inside-1_12102_448)"
      />
      <path
        d="M5.79283 9.78578L3.28577 7.27872L4.39984 6.16464L5.79283 7.55711L9.13611 4.21436L10.2502 5.32895L5.79283 9.78578Z"
        fill={fillColor}
      />
    </svg>
  );
};
export const DropdownIcon: React.FC<SVGIconProps> = ({
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
      <path d="M6 1.5H14V3.5H6V1.5Z" fill={fillColor} />
      <path d="M0 6.5H14V8.5H0V6.5Z" fill={fillColor} />
      <path d="M0 11.5H14V13.5H0V11.5Z" fill={fillColor} />
      <path
        d="M1.73191 3.5L0 0.5H3.46383L1.73191 3.5L0 0.5H3.46383L1.73191 3.5Z"
        fill={fillColor}
      />
    </svg>
  );
};
export const TextIcon: React.FC<SVGIconProps> = ({ fillColor = '#A3A3A3' }) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vector">
        <path
          id="Vector"
          d="M13.6781 0.765869H0.353734L0 6.2225H0.808714C1.06683 4.64132 1.49181 3.48262 2.08553 2.74766C2.803 1.85582 3.69734 1.79707 4.76854 1.79707H5.58975C5.80224 1.79707 5.84599 1.91457 5.84599 2.16143V13.8653C5.84599 14.0115 5.80224 14.134 5.71725 14.234H2.99987V15.234H10.9995V14.234H8.30713C8.20463 14.1253 8.15339 13.9772 8.15339 13.7872V2.24955C8.15339 1.95019 8.18651 1.79707 8.39338 1.79707H9.27771C11.412 1.79707 12.7313 3.01389 13.2357 6.2225H14L13.6781 0.765869Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
export const SentenceIcon: React.FC<SVGIconProps> = ({
  fillColor = '#A3A3A3',
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 2">
        <path
          id="Vector"
          d="M11.8166 3.86609H4.20207L4 6.98402H4.46207C4.60965 6.08057 4.85241 5.4185 5.19172 4.9985C5.60207 4.48885 6.1131 4.45574 6.72483 4.45574H7.19379C7.31517 4.45574 7.34 4.52264 7.34 4.66402V11.3523C7.34 11.4357 7.31517 11.5061 7.26621 11.5626H5.7131V12.1344H10.2848V11.5626H8.74621C8.68759 11.5006 8.65862 11.4157 8.65862 11.3075V4.71436C8.65862 4.54333 8.67724 4.45574 8.79586 4.45574H9.30138C10.5214 4.45574 11.2752 5.15161 11.5628 6.98471H11.9993L11.8159 3.86678L11.8166 3.86609Z"
          fill={fillColor}
        />
        <path
          id="Vector_2"
          d="M14.3448 1.65517V14.3448H1.65517V1.65517H14.3448ZM16 0H0V16H16V0Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
