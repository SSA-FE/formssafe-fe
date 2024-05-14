import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, BASE_URL } from '@/config';

interface User {
  userId: number;
  nickname: string;
}

export interface ResponseType {
  content: string | number[] | string[];
  questionId: string;
}

export interface TotalReponseType {
  responseId: number;
  responsedAt: string;
  responses: ResponseType[];
  user: User;
}

export interface AnswerListType {
  formId: number;
  responseCnt: number;
  totalResponses: TotalReponseType[];
}

export interface QuestionListType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  author: AuthorType;
  contents: ContentType[];
  description: string;
  endDate: string;
  expectTime: number;
  id: number;
  image: string[];
  privacyDisposalDate?: string;
  questionCnt: number;
  recipients: RecipientType[];
  responseCnt: number;
  reward?: RewardType;
  startDate: string;
  status: string;
  tags?: TagType[];
  title: string;
}

interface AuthorType {
  email: string;
  nickname: string;
  userId: number;
}

export interface ContentType {
  description?: string;
  id: string;
  type: string;
  title: string | null;
  options?: OptionType[];
  isRequired: boolean;
  isPrivacy: boolean;
}

export interface OptionType {
  id: number;
  detail: string;
}

interface RewardType {
  category: string;
  count: number;
  name: string;
}

interface TagType {
  id: number;
  name: string;
}

interface RecipientType {
  id: number;
  nickname: string;
}

interface Request {
  formId: string | undefined;
}

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    endSurvey: builder.mutation<void, string>({
      query: (formId) => ({
        url: `${API.FORM}/${formId}/close`,
        method: 'PATCH',
      }),
    }),
    fetchResult: builder.query<QuestionListType, Request>({
      query: (request) => {
        return {
          url: `${API.RESULT}/forms/${request.formId}`,
        };
      },
    }),
    fetchAnswer: builder.query<AnswerListType, Request>({
      query: (request) => ({
        url: `${API.RESULT}/forms/${request.formId}/submissions`,
      }),
    }),
  }),
});

export const {
  useEndSurveyMutation,
  useFetchResultQuery,
  useFetchAnswerQuery,
} = formApi;
