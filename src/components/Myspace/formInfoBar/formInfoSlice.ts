import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Reward {
  name: string;
  category: string;
  count: number;
}

interface FormMetaData {
  title: string;
  description: string;
  image?: string[];
  endDate: string;
  expectTime: number;
  tags?: string[];
  reward?: Reward;
}

const initialState: FormMetaData = {
  title: '',
  description: '',
  image: [],
  tags: [],
  endDate: '',
  expectTime: 5,
};

export const formMetaDataSlice = createSlice({
  name: 'formMetaData',
  initialState,
  reducers: {
    setFormMetaData: (state, action: PayloadAction<Partial<FormMetaData>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setFormMetaData } = formMetaDataSlice.actions;
export default formMetaDataSlice.reducer;
