import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API } from '@/config';

interface User {
  userId: number;
  nickname: string;
  imageUrl: string;
  email: string;
  isActive: boolean;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchUser: builder.query<User, void>({
      query: () => ({ url: `${API.USERS}/profile` }),
    }),
    updateUser: builder.mutation<User, { nickname: string }>({
      query: (body) => ({
        url: `${API.USERS}/join`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useFetchUserQuery, useUpdateUserMutation } = userApi;
