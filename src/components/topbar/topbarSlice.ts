import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/api/userApi';

const initialState: User = {
  userId: -1,
  nickname: '',
  imageUrl: '',
  email: '',
  isActive: false,
};

export const topbarSlice = createSlice({
  name: 'topbar',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      for (const key in state) {
        delete state[key as keyof User];
      }
      Object.assign(state, action.payload);
    },
    resetUser: (state) => {
      for (const key in state) {
        delete state[key as keyof User];
      }
      Object.assign(state, initialState);
    },
  },
});

export const { setUser, resetUser } = topbarSlice.actions;
export default topbarSlice.reducer;
