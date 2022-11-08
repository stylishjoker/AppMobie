import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setIsLoading } from "./index";
const logout = () => {
  const dispatch = useDispatch();
  AsyncStorage.removeItem("user");
};

const login = () => {
  const dispatch = useDispatch(setIsLoading(true));
  AsyncStorage.removeItem("user");
};

export { login, logout };
