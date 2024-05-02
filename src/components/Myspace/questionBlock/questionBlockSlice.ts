import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { questionBlock, questionType } from '@/types/questionTypes';

const initialState: questionBlock = {
  id: crypto.randomUUID(),
  type: 'single',
  isRequired: true,
  isPrivacy: false,
};

export const questionBlockSlice = createSlice({
  name: 'questionBlock',
  initialState,
  reducers: {
    setQuestionType: (state, action: PayloadAction<{ type: questionType }>) => {
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
