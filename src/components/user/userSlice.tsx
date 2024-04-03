import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@api/axios';
import { API } from '@/config';

interface UserState {
  user: {
    userId: number;
    nickname: string;
    imageUrl: string;
    email: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: {
    userId: 0,
    nickname: '',
    imageUrl: '',
    email: '',
  },
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await instance.get(`${API.USERS}/profile`);
  return response.data;
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (data: { nickname: string }) => {
    const response = await instance.patch(`${API.USERS}`, data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.status = 'succeeded';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { nickname } = action.payload;
        state.user.nickname = nickname;
        state.status = 'succeeded';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export default userSlice.reducer;
