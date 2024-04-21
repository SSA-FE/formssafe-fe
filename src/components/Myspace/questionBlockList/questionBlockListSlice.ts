import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionBlock, QuestionType } from '../questionBlock/QuestionBlock';

interface QuestionBlockList {
  questionList: QuestionBlock[];
  activeBlockId: string;
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
  activeBlockId: '',
};

export const questionBlockListSlice = createSlice({
  name: 'questionBlockList',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<QuestionBlock>) => {
      state.questionList.push(action.payload);
    },
    updateQuestion: (state, action: PayloadAction<QuestionBlock>) => {
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
    reorderQuestion: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const { fromIndex, toIndex } = action.payload;
      const targetBlock = state.questionList[fromIndex];
      state.questionList.splice(fromIndex, 1);
      state.questionList.splice(toIndex, 0, targetBlock);
    },
    setActiveBlockId: (state, action: PayloadAction<{ id: string }>) => {
      state.activeBlockId = action.payload.id;
    },
    updateQuestionType: (
      state,
      action: PayloadAction<{ id: string; type: QuestionType }>
    ) => {
      const index = state.questionList.findIndex(
        (question) => question.id === action.payload.id
      );
      if (index !== -1) {
        state.questionList[index].type = action.payload.type;
      }
    },
    updateQuestionRequired: (
      state,
      action: PayloadAction<{ id: string; required: boolean }>
    ) => {
      const index = state.questionList.findIndex(
        (question) => question.id === action.payload.id
      );
      if (index !== -1) {
        state.questionList[index].isRequired = action.payload.required;
      }
    },
    updateQuestionPrivacy: (
      state,
      action: PayloadAction<{ id: string; privacy: boolean }>
    ) => {
      const index = state.questionList.findIndex(
        (question) => question.id === action.payload.id
      );
      if (index !== -1) {
        state.questionList[index].isPrivacy = action.payload.privacy;
      }
    },
  },
});

export const {
  addQuestion,
  updateQuestion,
  removeQuestion,
  reorderQuestion,
  setActiveBlockId,
} = questionBlockListSlice.actions;
export default questionBlockListSlice.reducer;
