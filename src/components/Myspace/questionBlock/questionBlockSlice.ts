import { createSlice } from '@reduxjs/toolkit';
import { option, questionType } from './QuestionBlock';

interface QuestionBlock {
  id: string;
  type: questionType;
  title: string;
  description?: string;
  options?: option[];
  isRequired: boolean;
  isPrivacy: boolean;
}

const initialState: QuestionBlock = {
  id: crypto.randomUUID(),
  type: 'single',
  title: '',
  description: '',
  options: [
    { id: crypto.randomUUID(), value: '11111' },
    { id: crypto.randomUUID(), value: '22222' },
    { id: crypto.randomUUID(), value: '3333' },
  ],
  isRequired: true,
  isPrivacy: false,
};

export const questionBlockSlice = createSlice({
  name: 'questionBlock',
  initialState,
  reducers: {
    setTitle: (state, action) => ({
      ...state,
      title: action.payload,
    }),
    setDescription: (state, action) => ({
      ...state,
      description: action.payload,
    }),
    addOption: () => {},
    updateOption: () => {},
    removeOption: () => {},
  },
});

export const { setTitle, setDescription } = questionBlockSlice.actions;
export default questionBlockSlice.reducer;
