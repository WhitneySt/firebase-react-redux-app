import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialUser,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = initialUser.user;
      state.isAuth = initialUser.isAuth;
      state.isLoading = initialUser.isLoading;
      state.error = initialUser.error;
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, logout } = authSlice.actions;
export default authSlice.reducer;
