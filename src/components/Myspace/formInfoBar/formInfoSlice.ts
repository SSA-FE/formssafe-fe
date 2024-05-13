import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormMetaData {
  title: string;
  description: string;
  endDate: string;
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
  endDate: '',
  expectTime: 5,
  tags: [],
  reward: {
    name: '',
    category: '',
    count: 0,
  },
  isTemp: false,
};

export const formMetaDataSlice = createSlice({
  name: 'formMetaData',
  initialState,
  reducers: {
    setFormMetaData: (state, action: PayloadAction<FormMetaData>) => {
      state.title = action.payload.title;
    },

    // setTitle: (state, action: PayloadAction<FormMetaData>) => {
    //   state.title = action.payload.title;
    // },
    // setDescription: (state, action: PayloadAction<FormMetaData>) => {
    //   state.description = action.payload.description;
    // },
    // setEndDate: (state, action: PayloadAction<FormMetaData>) => {
    //   state.endDate = action.payload.endDate;
    // },
    // setExpectTime: (state, action: PayloadAction<FormMetaData>) => {
    //   state.expectTime = action.payload.expectTime;
    // },
    // setTags: (state, action: PayloadAction<FormMetaData>) => {
    //   state.tags = action.payload.tags;
    // },
    // setReward: (state, action: PayloadAction<FormMetaData>) => {
    //   state.reward = action.payload.reward;
    // },
    // setIsTemp: (state, action: PayloadAction<FormMetaData>) => {
    //   state.isTemp = action.payload.isTemp;
    // },
  },
});

export const {
  setFormMetaData,
  // setTitle,
  // setDescription,
  // setEndDate,
  // setTags,
  // setReward,
  // setIsTemp,
} = formMetaDataSlice.actions;
export default formMetaDataSlice.reducer;
