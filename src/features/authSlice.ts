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
  id: User;
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
      const { id, accessToken, refreshToken, ...user } = action.payload;
      state.id = id;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      localStorage.setItem("userId", id);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    logOut: (state) => {
      state.id = undefined;
      state.user = undefined;
      state.accessToken = undefined;
      state.refreshToken = undefined;
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
