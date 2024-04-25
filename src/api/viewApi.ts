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
}

interface Reward {
  name: string;
  category: string;
  count: number;
}

export interface Survey {
  id: number;
  title: string;
  description?: string;
  thumbnail?: string;
  author?: Author;
  expectTime: number;
  questionCnt: number;
  responseCnt: number;
  startDate: string;
  endDate: string;
  reward?: Reward;
  tags?: Tag[];
  status: string;
}

interface SurveyResponse {
  surveys: Survey[];
}

interface SurveyRequest {
  keyword?: string;
  sort?: string;
  category?: string[];
  status?: string;
  tag?: string[];
  page?: number;
}

export const viewApi = createApi({
  reducerPath: 'viewApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchSurveyList: builder.query<SurveyResponse, SurveyRequest>({
      query: (request) => ({
        url: `${API.VIEW}/forms`,
        params: request,
      }),
    }),
  }),
});

export const { useFetchSurveyListQuery } = viewApi;
