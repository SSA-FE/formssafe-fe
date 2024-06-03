export type questionType =
  | 'single'
  | 'checkbox'
  | 'dropdown'
  | 'long'
  | 'short'
  | 'text';

export const questionTypesInfo: Record<
  questionType,
  { label: string; description: string }
> = {
  single: {
    label: '객관식',
    description:
      '객관식은 사용자가 한정된 문항 중에 하나만 선택할 수 있는 질문 옵션입니다.',
  },
  checkbox: {
    label: '체크박스',
    description:
      '체크박스는 여러 문항 중 다수의 선택을 체크표시할 수 있는 질문 옵션입니다.',
  },
  dropdown: {
    label: '드롭다운',
    description:
      '드롭다운은 여러 문항 중 하나를 선택할 수 있는 콤보박스 형태의 질문 옵션입니다.',
  },
  long: {
    label: '장문형',
    description:
      '장문형은 여러 줄에 걸쳐 텍스트를 입력할 수 있는 질문 옵션입니다.',
  },
  short: {
    label: '단답형',
    description:
      '단문형은 한 줄로 간단한 텍스트를 입력할 수 있는 질문 옵션입니다.',
  },
  text: {
    label: '텍스트',
    description: '텍스트는 텍스트만 입력할 수 있는 질문 옵션입니다.',
  },
};

export interface questionBlock {
  id: string;
  type: questionType;
  title?: string;
  description?: string;
  options?: Option[];
  required?: boolean;
  privacy?: boolean;
}

export type Option = {
  id: string;
  detail: string;
};
