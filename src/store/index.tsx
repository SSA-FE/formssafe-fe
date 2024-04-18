import { configureStore } from '@reduxjs/toolkit';
import questionBlockListReducer from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import questionBlockReducer from '@/components/Myspace/questionBlock/questionBlockSlice';
import { userApi } from '@api/userApi';

export const store = configureStore({
  reducer: {
    questionBlockList: questionBlockListReducer,
    questionBlock: questionBlockReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
