import FormBody from '@/components/Form/FormBody';
import FormHeader from '@/components/Form/FormHeader';
import { QuestionType } from '@/components/Myspace/questionBlock/QuestionBlock';

interface Author {
  userId: number;
  nickname: string;
  email: string;
}

interface Reward {
  name: string;
  category: string;
  count: number;
}

interface Tag {
  id: number;
  name: string;
}

interface Option {
  id: number;
  value: string;
}

export interface Content {
  id: number;
  type: QuestionType;
  title?: string;
  description?: string;
  options?: Option[];
  isRequired: boolean;
  isPrivacy: boolean;
}

export interface Form {
  id: number;
  title: string;
  description: string;
  image: string[];
  author: Author;
  startDate: string;
  endDate: string;
  expectTime: number;
  privacyDisposalDate: string;
  contents: Content[];
  reward: Reward;
  tags: Tag[];
  status: string;
  questionCnt: number;
}

const dummy = {
  id: 0,
  title: '좋아하는 과일 설문지',
  description:
    '자전거 도둑, 달걀은 달걀로 갚으렴, 시인의 꿈, 옥상의 민들레꽃, 할머니는 우리 편, 마지막 임금님 작중 수남을 귀여워해주는 손님 중 하나가 야학이라도 다녀볼 생각 없냐라고 한 게 공부를 하기 시작한 계기가 되었고, 용품점 사장님은 그런 수남을 라며 손님들에게애ㅍ',
  image: [
    'https://cdn.pixabay.com/photo/2024/02/04/11/35/frozen-8551960_1280.jpg',
  ],
  author: {
    userId: 0,
    nickname: 'string',
    email: 'string',
  },
  startDate: '2024-04-28T06:43:39.135Z',
  endDate: '2024-05-28T06:43:39.135Z',
  expectTime: 20,
  privacyDisposalDate: '2024-04-28T06:43:39.135Z',
  contents: [
    {
      id: 1,
      type: 'dropdown' as QuestionType,
      title: '첫번째루 질문드리고싶은건요',
      description: '딱히 없어요',
      options: [
        {
          id: 1,
          value:
            '자전거 도둑, 달걀은 달걀로 갚으렴, 시인의 꿈, 옥상의 민들레꽃, 할머니는 우리 편, 마지막 임금님 작중 수남을 귀여워해주는 손님 중 하나가 야학이라도 다녀볼 생각 없냐라고 한 게 공부를 하기 시작한 계기가 저 시간만 있으면 책이라고라며 손님들에게애ㅍ',
        },
        {
          id: 2,
          value:
            '자전거 도둑, 달걀은 달걀로 갚으렴, 시인의 꿈, 옥상의 민들레꽃, 할머니는 우리 편, 마지막 임금님 작중 수남을 귀여워해주는 손님 중 하나가 야학이라도 다녀볼 생각 없냐라고',
        },
        {
          id: 3,
          value:
            '자전거 도둑, 마지막 임금님 작중 수남을 귀여워해주는 손님 중 하나가 야학이',
        },
      ],
      isRequired: false,
      isPrivacy: false,
    },
    {
      id: 2,
      type: 'short' as QuestionType,
      title: '두번째루 질문드리고싶은건요',
      description: '딱히 없어요',
      options: [],
      isRequired: false,
      isPrivacy: false,
    },
  ],
  reward: {
    name: 'string',
    category: 'string',
    count: 5,
  },
  tags: [
    {
      id: 0,
      name: '보상',
    },
    {
      id: 1,
      name: '심리',
    },
    {
      id: 2,
      name: '과일',
    },
  ],
  status: 'string',
  questionCnt: 10,
};

const Form = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <img
        src={dummy.image[0]}
        alt="thumbnail"
        className="w-full h-24 object-cover"
      />
      <div className="max-w-[832px] flex flex-col mx-auto bg-white">
        <FormHeader formData={dummy} />
        <FormBody questions={dummy.contents} />
      </div>
    </div>
  );
};

export default Form;
