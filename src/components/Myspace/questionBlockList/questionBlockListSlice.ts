import { createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { questionType } from '../questionBlockForm/QuestionBlockForm';

type questionBlock = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  questionType: questionType;
};

interface QuestionBlockList {
  questionList: questionBlock[];
}

const initialState: QuestionBlockList = {
  questionList: [
    {
      id: 'randomUUID',
      title: 'test',
      description: 'test',
      questionType: 'single',
      children: '',
    },
  ],
};

export const questionBlockListSlice = createSlice({
  name: 'questionBlockList',
  initialState,
  reducers: {
    addQuestion: () => {},
    removeQuestion: () => {},
    reorderQuestion: () => {},
  },
});

export const { addQuestion, removeQuestion, reorderQuestion } =
  questionBlockListSlice.actions;
export default questionBlockListSlice.reducer;
