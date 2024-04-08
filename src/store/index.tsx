import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '@components/users/userSlice';
import questionBlockReducer from '@/components/Myspace/questionBlock/questionBlockSlice';
import questionBlockListReducer from '@/components/Myspace/questionBlockList/questionBlockListSlice';

export const store = configureStore({
  reducer: {
    // import한 reducer를 넣어줌
    questionBlockList: questionBlockListReducer,
    questionBlock: questionBlockReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
