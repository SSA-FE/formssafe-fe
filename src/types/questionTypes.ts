export type questionType =
  | 'single'
  | 'checkbox'
  | 'dropdown'
  | 'long'
  | 'short'
  | 'text';

export const questionTypeLabels: Record<questionType, string> = {
  single: '객관식',
  checkbox: '체크박스',
  dropdown: '드롭다운',
  long: '장문형',
  short: '단답형',
  text: '텍스트',
};
