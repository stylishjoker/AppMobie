import { configureStore } from "@reduxjs/toolkit";
import handleLogin from "../../features/login";
import keepLogin from "../../features/keepLogin";
import SearchResult from "../../features/SearchBar";
import StartApp from "../../features/AppStart";
import GetUser from "../../features/GetUser";
import SaveUser from "../../features/SaveUser";
import GetLaptop from "../../features/GetLaptop";
import GetScreen from "../../features/GetScreen";

export const store = configureStore({
  reducer: {
    login: handleLogin,
    keepLogin,
    SearchResult,
    StartApp,
    GetUser,
    SaveUser,
    GetLaptop,
    GetScreen,
  },
});
