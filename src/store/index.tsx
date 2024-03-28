/**
 * This is the main store configuration file.
 */
import { configureStore } from '@reduxjs/toolkit';
// 각 redux 파일에서 export한 reducer를 import
import { isLogin } from './auth';
import questionBlockFormReducer from '@/components/Myspace/questionBlockForm/questionBlockFormSlice';

export default configureStore({
  reducer: {
    isLogin: isLogin.reducer,
    questionBlockForm: questionBlockFormReducer,
  },
});
