import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { questionType } from '../questionBlock/QuestionBlock';
import { option } from '../questionBlock/OptionList';

type questionBlock = {
  id: string;
  type: questionType;
  title?: string;
  description?: string;
  options?: option[];
  isRequired: boolean;
  isPrivacy: boolean;
};

interface QuestionBlockList {
  questionList: questionBlock[];
}

const initialState: QuestionBlockList = {
  questionList: [
    {
      id: crypto.randomUUID(),
      type: 'text',
      isRequired: true,
      isPrivacy: false,
    },
  ],
};

export const questionBlockListSlice = createSlice({
  name: 'questionBlockList',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<questionBlock>) => {
      state.questionList.push(action.payload);
    },
    updateQuestion: (state, action: PayloadAction<questionBlock>) => {
      const index = state.questionList.findIndex(
        (question) => question.id === action.payload.id
      );
      if (index !== -1) {
        state.questionList[index] = action.payload;
      }
    },
    removeQuestion: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.questionList.findIndex(
        (question) => question.id == action.payload.id
      );
      if (index !== -1) {
        state.questionList.splice(index, 1);
      }
    },
    reorderQuestion: () => {},
  },
});

export const { addQuestion, updateQuestion, removeQuestion, reorderQuestion } =
  questionBlockListSlice.actions;
export default questionBlockListSlice.reducer;
