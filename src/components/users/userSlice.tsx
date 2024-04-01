import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@api/axios';
import { API } from '@/config';
import { RootState } from '@/store';

interface UsersState {
  users: {
    userId: number;
    nickname: string;
    imageUrl: string;
    email: string;
  }[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await instance.get(`${API.USERS}/profile`);
  return response.data;
});

export const updateUsers = createAsyncThunk(
  'users/updateUsers',
  async (data: { nickname: string }) => {
    const response = await instance.patch(`${API.USERS}`, data);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const { userId, nickname, imageUrl, email } = action.payload;
        state.users = [
          {
            userId,
            nickname,
            imageUrl,
            email,
          },
        ];
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
        console.error(action.error.message);
      })
      .addCase(updateUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        const { nickname } = action.payload;
        state.users[0].nickname = nickname;
        state.status = 'succeeded';
      })
      .addCase(updateUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string;
      });
  },
});

export const selectAllUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
