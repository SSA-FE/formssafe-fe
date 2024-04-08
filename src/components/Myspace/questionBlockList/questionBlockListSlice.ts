import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { option, questionType } from '../questionBlock/QuestionBlock';

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
      type: 'single',
      title: '1반임',
      description: '1반은 즐거워',
      options: [
        { id: crypto.randomUUID(), value: '11111' },
        { id: crypto.randomUUID(), value: '22222' },
        { id: crypto.randomUUID(), value: '3333' },
      ],
      isRequired: true,
      isPrivacy: false,
    },
    {
      id: crypto.randomUUID(),
      type: 'checkbox',
      title: '2반임',
      description: '2반은 즐거워',
      options: [
        { id: crypto.randomUUID(), value: '4444' },
        { id: crypto.randomUUID(), value: '55555' },
      ],
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
    removeQuestion: () => {},
    reorderQuestion: () => {},
  },
});

export const { addQuestion, updateQuestion, removeQuestion, reorderQuestion } =
  questionBlockListSlice.actions;
export default questionBlockListSlice.reducer;
