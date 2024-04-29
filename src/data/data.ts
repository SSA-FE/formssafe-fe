import { questionType } from '@/types/questionTypes';

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
