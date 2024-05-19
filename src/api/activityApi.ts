import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API } from '@/config';

interface Tag {
  id: number;
  name: string;
  count: number;
}

interface Author {
  userId: number;
  nickname: string;
  email?: string;
}

export interface Reward {
  name: string;
  category: string;
  count: number;
}

export interface Form {
  id: number;
  title: string;
  description?: string;
  thumbnail?: string;
  author: Author;
  expectTime: number;
  questionCnt: number;
  responseCnt: number;
  startDate: string;
  endDate: string;
  reward?: Reward;
  tags?: Tag[];
  status: string;
}

interface Cursor {
  sort: string;
  top: number;
  startDate: string;
  endDate: string;
  responseCnt: number;
}

export interface FormResponse {
  forms: Form[];
  cursor: Cursor;
}

interface FormRequest {
  sort?: string;
  keyword?: string;
}

export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchParticipatedSurveys: builder.query<FormResponse, FormRequest>({
      query: (request) => ({
        url: `${API.ACTIVITY}/submissions`,
        params: request,
      }),
    }),
    fetchRegisteredSurveys: builder.query<FormResponse, FormRequest>({
      query: (request) => ({
        url: `${API.ACTIVITY}/forms`,
        params: request,
      }),
    }),
  }),
});

export const {
  useFetchParticipatedSurveysQuery,
  useFetchRegisteredSurveysQuery,
} = activityApi;
