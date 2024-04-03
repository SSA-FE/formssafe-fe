import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/components/user/userSlice';
import questionBlockFormReducer from '@components/Myspace/questionBlockForm/questionBlockFormSlice';

export const store = configureStore({
  reducer: {
    questionBlockForm: questionBlockFormReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
