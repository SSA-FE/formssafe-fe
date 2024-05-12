// 설문 내용 dummy
export const resultDummy = {
  id: 28,
  title: '테스트용 임시설문1~~!',
  description: '임시임시 입니당 ~~~~~~~~~~~',
  image: [
    'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=1280&h=720&crop=1',
  ],
  author: {
    userId: 2,
    nickname: '테스트계정2',
    email: 'test2@example.com',
  },
  startDate: '2024-04-18T14:53:00',
  endDate: '2024-04-25T15:30:00',
  expectTime: 5,
  privacyDisposalDate: '2024-04-30T13:30:00',
  contents: [
    {
      id: 'c9abe2a8-7397-44ae-be6a-8b11b398ca61',
      type: 'text',
      description: '설명 블록입니다. 설문 시작~',
    },
    {
      id: 'c228a659-8bfb-455d-932f-abf35bdd27eb',
      type: 'short',
      description: '단답으로 답하시오~~',
      title: '단답형 질문',
      privacy: false,
      required: true,
    },
    {
      id: 'da3da944-1b51-429e-a815-35e684984bc8',
      type: 'single',
      description: '하나만 고르시오~',
      title: '단일 객관식 질문',
      options: [
        {
          id: 1,
          detail: `자전거 도둑, 달걀은 달걀로 갚으렴, 시인의 꿈, 옥상의 민들레꽃, 할머니는 우리 편, 마지막 임금님 작중 수남을 귀여워해주는 손님 중 하나가 야학이라도 다녀볼 생각 없냐라고 한 게 공부를 하기 시작한 계기가 되었고, 용품점 사장님은 그런 수남을 '그저 시간만 있으면 책이라고'라며 손님들에게애ㅍ`,
        },
        {
          id: 2,
          detail: 'option2',
        },
        {
          id: 3,
          detail: 'option3',
        },
        {
          id: 4,
          detail: 'option4',
        },
        {
          id: 5,
          detail: 'option5',
        },
      ],
      privacy: true,
      required: false,
    },
    {
      id: '6d060e65-06ca-46f9-8daa-213bbb1f3563',
      type: 'long',
      description: '장문으로 답하시오.',
      title: '장문형 질문',
      privacy: false,
      required: true,
    },
    {
      id: '6e808563-9ad8-4436-8c73-80735bdb55fc',
      type: 'dropdown',
      description: '드롭다운으로 답하시오.',
      title: '드롭다운 질문',
      options: [
        {
          id: 1,
          detail: 'option1',
        },
        {
          id: 2,
          detail: 'option2',
        },
        {
          id: 3,
          detail: 'option3',
        },
      ],
      privacy: true,
      required: false,
    },
    {
      id: 'fd301c08-2ece-4f8c-89b1-48549666383f',
      type: 'checkbox',
      description: '체크박스로 답하시오~!!!',
      title: '체크박스 질문',
      options: [
        {
          id: 1,
          detail: 'option1',
        },
        {
          id: 2,
          detail: 'option2',
        },
        {
          id: 3,
          detail: 'option3',
        },
        {
          id: 4,
          detail: 'option4',
        },
      ],
      privacy: true,
      required: false,
    },
  ],
  reward: {
    name: '고양이 사료',
    category: '기타',
    count: 10,
  },
  tags: [
    {
      id: 32,
      name: '고양이',
    },
    {
      id: 33,
      name: '동물',
    },
  ],
  status: 'progress',
  questionCnt: 5,
  responseCnt: 0,
  recipients: [],
};

// 특정 설문에 대한 답변 dummy 데이터 -> forms/{formId}/result
export const answerDummy = {
  formId: 1,
  responseCnt: 2,
  totalResponses: [
    {
      responseId: 1,
      user: {
        id: 1,
        nickname: '김유경',
      },
      responses: [
        {
          questionId: 1,
          content: '단답형에 대한 답변입니당',
        },
        {
          questionId: 1,
          content: '2',
        },
        {
          questionId: 1,
          content:
            '장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 장문향에 대한 답변입니담 ',
        },
        {
          questionId: 1,
          content: '1',
        },
        {
          questionId: 1,
          content: ['1', '2'],
        },
      ],
      responsedAt: '2024.05.05',
    },
    {
      responseId: 1,
      user: {
        id: 2,
        nickname: '김유경2222',
      },
      responses: [
        {
          questionId: 1,
          content: '루룰ㄹㄹ랄랄라라',
        },
        {
          questionId: 2,
          content: '4',
        },
        {
          questionId: 3,
          content:
            '룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다 룰롤러러라랄러랄라랄 집가고싶다',
        },
        {
          questionId: 4,
          content: '2',
        },
        {
          questionId: 5,
          content: ['3', '4'],
        },
      ],
      responsedAt: '2024.05.05',
    },
  ],
};
