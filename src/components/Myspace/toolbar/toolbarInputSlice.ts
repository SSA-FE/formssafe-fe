import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type toolbarInput = {
  keyword?: string;
  sort?: string;
};

const initialState: toolbarInput = {};

export const toolbarInputSlice = createSlice({
  name: 'toolbarInput',
  initialState,
  reducers: {
    updateKeyword: (state, action: PayloadAction<toolbarInput>) => {
      state.keyword = action.payload.keyword;
    },
    updateSort: (state, action: PayloadAction<toolbarInput>) => {
      state.sort = action.payload.sort;
    },
    resetInput: (state) => {
      state.keyword = '';
      state.sort = '';
    },
  },
});

export const { updateKeyword, updateSort, resetInput } =
  toolbarInputSlice.actions;
export default toolbarInputSlice.reducer;
