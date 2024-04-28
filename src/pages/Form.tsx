import FormBody from '@/components/Form/FormBody';
import FormHeader from '@/components/Form/FormHeader';

interface Form {
  id: number;
  title: string;
  description: string;
  image: string[];
  author: {
    userId: number;
    nickname: string;
    email: string;
  };
  startDate: string;
  endDate: string;
  expectTime: number;
  privacyDisposalDate: string;
  contents: [
    {
      id: number;
      type: string;
      description: string;
      options: string[];
    },
  ];
  reward: {
    name: string;
    category: string;
    count: number;
  };
  tags: [
    {
      id: number;
      name: string;
    },
  ];
  status: string;
  questionCnt: number;
}

const dummy = {
  id: 0,
  title: 'string',
  description: 'string',
  image: [
    'https://cdn.pixabay.com/photo/2024/02/04/11/35/frozen-8551960_1280.jpg',
  ],
  author: {
    userId: 0,
    nickname: 'string',
    email: 'string',
  },
  startDate: '2024-04-28T06:43:39.135Z',
  endDate: '2024-04-28T06:43:39.135Z',
  expectTime: 0,
  privacyDisposalDate: '2024-04-28T06:43:39.135Z',
  contents: [
    {
      id: 'string',
      type: 'string',
      description: 'string',
    },
  ],
  reward: {
    name: 'string',
    category: 'string',
    count: 0,
  },
  tags: [
    {
      id: 0,
      name: 'string',
    },
  ],
  status: 'string',
  questionCnt: 0,
};

const Form = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <img
        src={dummy.image[0]}
        alt="thumbnail"
        className="w-full h-24 object-cover"
      />
      <div className="max-w-[76.8rem] flex flex-col mx-auto bg-white">
        <FormHeader />
        <FormBody />
      </div>
    </div>
  );
};

export default Form;
