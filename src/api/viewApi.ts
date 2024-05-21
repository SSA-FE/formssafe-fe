import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API } from '@/config';
import { questionType } from '@/types/questionTypes';

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
  detail: string;
}

export interface Content {
  id: number;
  type: questionType;
  title?: string;
  description?: string;
  options?: Option[];
  required?: boolean;
  privacy?: boolean;
}

export interface Form {
  id: number;
  title: string;
  description?: string;
  image?: string[];
  thumbnail?: string;
  author: Author;
  startDate: string;
  endDate: string;
  expectTime: number;
  contents: Content[];
  reward?: Reward;
  tags?: Tag[];
  status: string;
  questionCnt: number;
}

export interface Cursor {
  sort?: string;
  top?: number;
  startDate?: string;
  endDate?: string;
  responseCnt?: number;
}

export interface FormResponse {
  forms: Form[];
  cursor?: Cursor;
}

export interface FormRequest {
  keyword?: string;
  category?: string[];
  status?: string;
  tag?: string[];
  sort?: string;
  top?: number;
  startDate?: string;
  endDate?: string;
  responseCnt?: number;
}

export const viewApi = createApi({
  reducerPath: 'viewApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchSurveyList: builder.query<FormResponse, FormRequest>({
      query: (request) => ({
        url: `${API.VIEW}/forms`,
        params: request,
      }),
    }),
    fetchSurveyDetail: builder.query<Form, number>({
      query: (id) => ({
        url: `${API.VIEW}/forms/${id}`,
      }),
    }),
    fetchPopularForms: builder.query<Form[], void>({
      query: () => ({
        url: `${API.VIEW}/forms/hot`,
      }),
    }),
  }),
});

export const {
  useFetchSurveyListQuery,
  useFetchSurveyDetailQuery,
  useFetchPopularFormsQuery,
} = viewApi;
