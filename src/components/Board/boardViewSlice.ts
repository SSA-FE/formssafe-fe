import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ViewRequest {
  keyword?: string;
  sort?: string;
  category?: string[];
  status?: string;
  tag?: string[];
}

interface ViewSliceTypes extends ViewRequest {
  prevStatus?: string;
}

const initialState: ViewSliceTypes = {
  status: '',
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
      state.prevStatus = state.status;
      state.status = action.payload;
    },
    setTag: (state, action: PayloadAction<string>) => {
      if (!state.tag) {
        state.tag = [];
      }
      (state.tag as string[]).push(action.payload);
    },
    removeTag: (state, action: PayloadAction<string>) => {
      if (!state.tag) {
        state.tag = [];
      }
      state.tag = (state.tag as string[]).filter(
        (tag) => tag !== action.payload
      );
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
} = boardViewSlice.actions;
export default boardViewSlice.reducer;
