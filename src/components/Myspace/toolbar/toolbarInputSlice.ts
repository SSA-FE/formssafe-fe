import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type toolbarInput = {
  keyword?: string;
  sort?: string;
};

const initialState: toolbarInput = {
  sort: 'startDate',
};

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
    reset: () => initialState,
  },
});

export const { updateKeyword, updateSort, reset } = toolbarInputSlice.actions;
export default toolbarInputSlice.reducer;
