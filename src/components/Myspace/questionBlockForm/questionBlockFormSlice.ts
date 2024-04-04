import { createSlice } from '@reduxjs/toolkit';

interface QuestionBlockFormFields {
  id: string;
  title: string;
  description?: string;
}

const initialState: QuestionBlockFormFields = {
  id: crypto.randomUUID(),
  title: '',
};

export const questionBlockFormSlice = createSlice({
  name: 'questionBlockForm',
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
  },
});

export const { setTitle, setDescription } = questionBlockFormSlice.actions;
export default questionBlockFormSlice.reducer;
