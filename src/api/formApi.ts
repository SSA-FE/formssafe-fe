/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, BASE_URL } from '@/config';

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
    fetchAnswer: builder.query<any, any>({
      query: (request) => {
        return {
          url: `${API.RESULT}/forms/${request.formId}`,
          params: request,
        };
      },
    }),
    fetchResult: builder.query<any, any>({
      query: (request) => ({
        url: `${API.RESULT}/forms/${request.formId}/submissions`,
        params: request,
      }),
    }),
  }),
});

export const {
  useEndSurveyMutation,
  useFetchAnswerQuery,
  useFetchResultQuery,
} = formApi;
