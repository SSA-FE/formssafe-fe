import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API } from '@/config';

export const fileApi = createApi({
  reducerPath: 'fileApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchPresignedUrl: builder.query<{ path: string }, string>({
      query: (fileName) => ({ url: `${API.FILES}/upload/${fileName}` }),
    }),
  }),
});

export const { useFetchPresignedUrlQuery } = fileApi;
