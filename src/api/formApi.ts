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
  }),
});

export const { useEndSurveyMutation } = formApi;
