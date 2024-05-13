import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormMetaData {
  title: string;
  description: string;
  endData: string;
  expectTime: number;
  tags: string[];
  reward: {
    name: string;
    category: string;
    count: number;
  };
  isTemp: false;
}

const initialState: FormMetaData = {
  title: '',
  description: '',
  endData: '',
  expectTime: 5,
  tags: [],
  reward: {
    name: '',
    category: '',
    count: 0,
  },
  isTemp: false,
};

export const questionBlockListSlice = createSlice({
  name: 'questionBlockList',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<FormMetaData>) => {
      state.title = action.payload.title;
    },
  },
});

export const { addQuestion } = questionBlockListSlice.actions;
export default questionBlockListSlice.reducer;
