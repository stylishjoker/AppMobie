import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

import { setAccount, setPassword } from "../../features/login";
import { setUser } from "../../features/SaveUser";
import Spacer from "../../components/Spacer";
import NewButton from "../../components/NewButton";
import {
  accountLogin,
  passwordLogin,
  GET_USER,
} from "../../App/store/selector";
import { getUsers } from "../../features/GetUser";

const Login = () => {
  const dispatch = useDispatch();
  const rootNav = useNavigation();
  const account = useSelector(accountLogin);
  const password = useSelector(passwordLogin);
  const user = useSelector(GET_USER);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogin = () => {
    var login = false;
    if (user) {
      Array.from(user).forEach((item) => {
        if (item.account == account && item.password == password) {
          dispatch(setUser(item));
          storeData(item);
          login = true;
          rootNav.navigate("HomeMain");
        }
      });
      if (!login) {
        Alert.alert("Tài khoản hoặc mật khẩu không chính xác");
      }
    }
  };
  const handleAccount = (text) => {
    return dispatch(setAccount(text));
  };
  const handlePassword = (text) => {
    return dispatch(setPassword(text));
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={account}
        onChangeText={handleAccount}
        style={styles.TextInput}
        placeholder="Nhập tài khoản"
        placeholderTextColor={"white"}
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={handlePassword}
        style={styles.TextInput}
        placeholder="Nhập mật khẩu"
        placeholderTextColor={"white"}
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={styles.forgot}>
        <Text style={{ color: "white" }}>Quên mật khẩu ???</Text>
      </TouchableOpacity>
      <Spacer height="20" />
      <NewButton
        callback={handleLogin}
        title="Đăng nhập"
        bgColor="#333"
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    borderColor: "white",
    color: "white",
  },
  forgot: {
    alignSelf: "flex-end",
    marginRight: "18%",
    marginTop: 10,
  },
});
export default Login;
