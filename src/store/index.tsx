import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '@components/users/userSlice';
import questionBlockFormReducer from '@components/Myspace/questionBlockForm/questionBlockFormSlice';

export const store = configureStore({
  reducer: {
    // import한 reducer를 넣어줌
    questionBlockForm: questionBlockFormReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
