import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionBlock, QuestionType } from '../questionBlock/QuestionBlock';

const initialState: QuestionBlock = {
  id: crypto.randomUUID(),
  type: 'single',
  isRequired: true,
  isPrivacy: false,
};

export const questionBlockSlice = createSlice({
  name: 'questionBlock',
  initialState,
  reducers: {
    setQuestionType: (state, action: PayloadAction<{ type: QuestionType }>) => {
      state.type = action.payload.type;
    },
    setIsRequired: (state, action: PayloadAction<{ isRequired: boolean }>) => {
      state.isPrivacy = action.payload.isRequired;
    },
    setIsPrivacy: (state, action: PayloadAction<{ isPrivacy: boolean }>) => {
      state.isPrivacy = action.payload.isPrivacy;
    },
  },
});

export const { setQuestionType, setIsRequired, setIsPrivacy } =
  questionBlockSlice.actions;
export default questionBlockSlice.reducer;
