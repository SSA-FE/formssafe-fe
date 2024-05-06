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

export const questionTypeDescriptions: Record<questionType, string> = {
  single:
    '객관식은 사용자가 한정된 문항 중에 하나만 선택할 수 있는 질문 옵션입니다.',
  checkbox:
    '체크박스는 여러 문항 중 다수의 선택을 체크표시할 수 있는 질문 옵션입니다.',
  dropdown:
    '드롭다운은 여러 문항 중 하나를 선택할 수 있는 콤보박스 형태의 질문 옵션입니다.',
  long: '장문형은 여러 줄에 걸쳐 텍스트를 입력할 수 있는 질문 옵션입니다.',
  short: '단문형은 한 줄로 간단한 텍스트를 입력할 수 있는 질문 옵션입니다.',
  text: '텍스트는 텍스트만 입력할 수 있는 질문 옵션입니다.',
};

export const questionTypes: Record<
  questionType,
  { label: string; description: string }
> = {
  single: {
    label: questionTypeLabels.single,
    description: questionTypeDescriptions.single,
  },
  checkbox: {
    label: questionTypeLabels.checkbox,
    description: questionTypeDescriptions.checkbox,
  },
  dropdown: {
    label: questionTypeLabels.dropdown,
    description: questionTypeDescriptions.dropdown,
  },
  long: {
    label: questionTypeLabels.long,
    description: questionTypeDescriptions.long,
  },
  short: {
    label: questionTypeLabels.short,
    description: questionTypeDescriptions.short,
  },
  text: {
    label: questionTypeLabels.text,
    description: questionTypeDescriptions.text,
  },
};

export interface questionBlock {
  id: string;
  type: questionType;
  title?: string;
  description?: string;
  options?: Option[];
  isRequired: boolean;
  isPrivacy: boolean;
}

export type Option = {
  id: string;
  value: string;
};
