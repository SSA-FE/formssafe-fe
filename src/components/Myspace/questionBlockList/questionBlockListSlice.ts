import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { questionType, questionBlock } from '@/types/questionTypes';

interface QuestionBlockList {
  questionList: questionBlock[];
  activeBlockId: string;
}

const initialState: QuestionBlockList = {
  questionList: [
    {
      id: crypto.randomUUID(),
      type: 'text',
      required: true,
      privacy: false,
    },
  ],
  activeBlockId: '',
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
        state.questionList[index] = {
          ...state.questionList[index],
          ...action.payload,
        };
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
      action: PayloadAction<{ id: string; type: questionType }>
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
        state.questionList[index].required = action.payload.required;
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
        state.questionList[index].privacy = action.payload.privacy;
      }
    },
    setTempQuestions: (state, action: PayloadAction<questionBlock[]>) => {
      state.questionList = action.payload;
    },
  },
});

export const {
  addQuestion,
  updateQuestion,
  removeQuestion,
  reorderQuestion,
  setActiveBlockId,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionPrivacy,
  setTempQuestions,
} = questionBlockListSlice.actions;
export default questionBlockListSlice.reducer;
