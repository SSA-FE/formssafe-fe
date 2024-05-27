import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { questionBlock, questionType } from '@/types/questionTypes';

const initialState: questionBlock = {
  id: crypto.randomUUID(),
  type: 'single',
  required: true,
  privacy: false,
};

export const questionBlockSlice = createSlice({
  name: 'questionBlock',
  initialState,
  reducers: {
    setQuestionType: (state, action: PayloadAction<{ type: questionType }>) => {
      state.type = action.payload.type;
    },
    setRequired: (state, action: PayloadAction<{ required: boolean }>) => {
      state.privacy = action.payload.required;
    },
    setPrivacy: (state, action: PayloadAction<{ privacy: boolean }>) => {
      state.privacy = action.payload.privacy;
    },
  },
});

export const { setQuestionType, setRequired, setPrivacy } =
  questionBlockSlice.actions;
export default questionBlockSlice.reducer;
