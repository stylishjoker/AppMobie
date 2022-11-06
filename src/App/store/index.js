import { configureStore } from "@reduxjs/toolkit";
import handleLogin from "../../features/login";
import keepLogin from "../../features/keepLogin";

export const store = configureStore({
  reducer: {
    login: handleLogin,
    keepLogin,
  },
});
