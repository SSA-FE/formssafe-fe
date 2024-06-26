import { configureStore } from '@reduxjs/toolkit';
import questionBlockListReducer from '@/components/Myspace/questionBlockList/questionBlockListSlice';
import questionBlockReducer from '@/components/Myspace/questionBlock/questionBlockSlice';
import toolbarInputReducer from '@/components/Myspace/toolbar/toolbarInputSlice';
import boardViewReducer from '@/components/Board/boardViewSlice';
import topbarSliceReducer from '@/components/topbar/topbarSlice';
import formMetaDataSliceReducer from '@/components/Myspace/formInfoBar/formInfoSlice';

import { userApi } from '@api/userApi';
import { activityApi } from '@/api/activityApi';
import { viewApi } from '@/api/viewApi';
import { notificationApi } from '@/api/notificationApi';
import { submissionApi } from '@/api/submissionApi';
import { formApi } from '@/api/formApi';
import { fileApi } from '@/api/fileApi';

export const store = configureStore({
  reducer: {
    questionBlockList: questionBlockListReducer,
    questionBlock: questionBlockReducer,
    toolbarInput: toolbarInputReducer,
    boardView: boardViewReducer,
    topbarSlice: topbarSliceReducer,
    formMetaData: formMetaDataSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    [viewApi.reducerPath]: viewApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
    [submissionApi.reducerPath]: submissionApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      userApi.middleware,
      activityApi.middleware,
      viewApi.middleware,
      submissionApi.middleware,
      formApi.middleware,
      fileApi.middleware,
      notificationApi.middleware,
      submissionApi.middleware,
      formApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
