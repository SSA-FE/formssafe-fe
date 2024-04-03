import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/components/user/userSlice';
import questionBlockFormReducer from '@components/Myspace/questionBlockForm/questionBlockFormSlice';
import { userApi } from '@api/userApi';

export const store = configureStore({
  reducer: {
    questionBlockForm: questionBlockFormReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
