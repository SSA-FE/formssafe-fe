/**
 * This is the main store configuration file.
 */
import { configureStore } from '@reduxjs/toolkit';
// 각 redux 파일에서 export한 reducer를 import
import { isLogin } from './auth';

export default configureStore({
  reducer: {
    // import한 reducer를 넣어줌
    isLogin: isLogin.reducer,
  },
});
