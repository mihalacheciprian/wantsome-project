import { createSlice } from "@reduxjs/toolkit/react";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface AuthState {
  user: User;
  accessToken: string;
  refreshToken: string;
}

const initialState: Partial<AuthState> = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken, ...user } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    logOut: (state) => {
      state.user = {} as User;
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
