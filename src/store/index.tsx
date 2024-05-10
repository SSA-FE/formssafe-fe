import { configureStore } from '@reduxjs/toolkit';
import questionBlockListReducer from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import questionBlockReducer from '@/components/Myspace/questionBlock/questionBlockSlice';
import toolbarInputReducer from '@/components/Myspace/toolbar/toolbarInputSlice';
import boardViewReducer from '@/components/Board/boardViewSlice';
import topbarSliceReducer from '@/components/topbar/topbarSlice';

import { userApi } from '@api/userApi';
import { activityApi } from '@/api/activityApi';
import { viewApi } from '@/api/viewApi';
import { submissionApi } from '@/api/submissionApi';

export const store = configureStore({
  reducer: {
    questionBlockList: questionBlockListReducer,
    questionBlock: questionBlockReducer,
    toolbarInput: toolbarInputReducer,
    boardView: boardViewReducer,
    topbarSlice: topbarSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [viewApi.reducerPath]: viewApi.reducer,
    [submissionApi.reducerPath]: submissionApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      userApi.middleware,
      activityApi.middleware,
      viewApi.middleware,
      submissionApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
