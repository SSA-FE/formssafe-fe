/**
 * This file is used to manage the redux store for auth-related actions.
 */

import { createSlice } from '@reduxjs/toolkit';
import { ILoginState } from '@/interface/redux';

const initialState: ILoginState = {
  isLogin: false,
};

export const isLogin = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = isLogin.actions;
