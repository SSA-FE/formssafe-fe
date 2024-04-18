import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionType } from '../questionBlock/QuestionBlock';
import { Option } from '../questionBlock/OptionList';

export interface QuestionBlock {
  id: string;
  type: QuestionType;
  title?: string;
  description?: string;
  options?: Option[];
  isRequired: boolean;
  isPrivacy: boolean;
}

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
    setIsRequired: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isPrivacy = action.payload.value;
    },
    setIsPrivacy: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isPrivacy = action.payload.value;
    },
  },
});

export const { setQuestionType, setIsRequired, setIsPrivacy } =
  questionBlockSlice.actions;
export default questionBlockSlice.reducer;
