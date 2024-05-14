import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API } from '@/config';

export interface Notification {
  id: number;
  type: string;
  content: string;
  contentId: number;
  isRead: boolean;
  createDate: string;
}

interface Cursor {
  top?: number;
}

interface NotificationResponse {
  notifications: Notification[];
  cursor: Cursor;
}

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    fetchAllNotifications: builder.query<NotificationResponse, Cursor>({
      query: (cursor) => {
        const url = cursor.top
          ? `${API.NOTIFICATION}?top=${cursor.top}`
          : API.NOTIFICATION;
        return {
          url,
          method: 'GET',
        };
      },
      keepUnusedDataFor: 0,
    }),
    fetchUnreadNotifications: builder.query<NotificationResponse, Cursor>({
      query: (cursor) => {
        const url = cursor.top
          ? `${API.NOTIFICATION}/unread?top=${cursor.top}`
          : `${API.NOTIFICATION}/unread`;
        return {
          url,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useFetchAllNotificationsQuery,
  useFetchUnreadNotificationsQuery,
} = notificationApi;
