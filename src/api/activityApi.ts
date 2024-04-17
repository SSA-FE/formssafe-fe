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
  description: string;
  thumbnail: string;
  author: Author;
  expectTime: number;
  questionCnt: number;
  responseCnt: number;
  startDate: string;
  endDate: string;
  reward: Reward;
  tags: Tag[];
  status: string;
  isTemp: boolean;
}

interface SurveyResponse {
  surveys: Survey[];
}

export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchParticipatedSurveys: builder.query<SurveyResponse, void>({
      query: () => ({ url: `${API.ACTIVITY}/responses` }),
    }),
    fetchRegisteredSurveys: builder.query<SurveyResponse, void>({
      query: () => ({
        url: `${API.ACTIVITY}/forms`,
      }),
    }),
  }),
});

export const {
  useFetchParticipatedSurveysQuery,
  useFetchRegisteredSurveysQuery,
} = activityApi;
