import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
    //Aquí van los otros reducers
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
