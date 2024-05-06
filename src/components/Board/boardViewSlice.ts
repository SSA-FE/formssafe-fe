import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ViewRequest {
  keyword?: string;
  sort?: string;
  category?: string[];
  status?: string;
  tag?: string[];
  top?: number;
  startDate?: string;
  endDate?: string;
  responseCnt?: number;
}

const initialState: ViewRequest = {
  keyword: '',
  sort: 'createdtime',
  category: [''],
  status: '',
  tag: [],
  top: 0,
  startDate: '',
  endDate: '',
  responseCnt: 0,
};

export const boardViewSlice = createSlice({
  name: 'boardView',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = [action.payload];
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setTag: (state, action: PayloadAction<string>) => {
      if (!state.tag) {
        state.tag = [];
      }
      state.tag.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<string>) => {
      if (!state.tag) {
        state.tag = [];
      }
      state.tag = state.tag.filter((tag) => tag !== action.payload);
    },
    setTop: (state, action: PayloadAction<number>) => {
      state.top = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    setResponseCnt: (state, action: PayloadAction<number>) => {
      state.responseCnt = action.payload;
    },
  },
});

export const {
  setKeyword,
  setSort,
  setCategory,
  setStatus,
  setTag,
  removeTag,
  setTop,
  setStartDate,
  setEndDate,
  setResponseCnt,
} = boardViewSlice.actions;
export default boardViewSlice.reducer;
