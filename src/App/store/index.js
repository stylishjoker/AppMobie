import { configureStore } from "@reduxjs/toolkit";
import handleLogin from "../../features/login";
import keepLogin from "../../features/keepLogin";
import SearchResult from "../../features/SearchBar";

export const store = configureStore({
  reducer: {
    login: handleLogin,
    keepLogin,
    SearchResult,
  },
});
