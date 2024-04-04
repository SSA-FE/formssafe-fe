import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API } from '@/config';

interface UserType {
  userInfo: {
    userId: number;
    nickname: string;
    imageUrl: string;
    email: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isLoggedIn: boolean;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchUser: builder.query<UserType, void>({
      query: () => ({ url: `${API.USERS}/profile` }),
    }),
    updateUser: builder.mutation<UserType, { nickname: string }>({
      query: (body) => ({
        url: `${API.USERS}`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const { useFetchUserQuery, useUpdateUserMutation } = userApi;
