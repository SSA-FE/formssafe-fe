import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, BASE_URL } from '@/config';
import { questionType } from '@/types/questionTypes';

export interface Content {
  type: questionType;
  title?: string;
  description?: string;
  options?: string[];
  isRequired?: boolean;
  isPrivacy?: boolean;
}

interface Reward {
  name: string;
  category: string;
  count: number;
}

interface Form {
  title: string;
  image?: string[];
  description: string;
  endDate: string;
  expectTime: number;
  contents: Content[];
  tags?: string[];
  reward?: Reward;
  isTemp: boolean;
}

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchFormCreation: builder.mutation<{ formId: number }, Form>({
      query: (form) => ({
        url: API.FORM,
        method: 'POST',
        body: form,
      }),
    }),
  }),
});

export const { useFetchFormCreationMutation } = formApi;
