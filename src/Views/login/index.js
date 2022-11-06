import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setAccount, setPassword } from "../../features/login";
const Login = () => {
  const account = useSelector((state) => state.login.account);
  const password = useSelector((state) => state.login.password);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        value={account}
        onChangeText={(text) => dispatch(setAccount(text))}
        style={styles.TextInput}
        placeholder="Nhập tài khoản"
        placeholderTextColor={"white"}
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={(text) => dispatch(setPassword(text))}
        style={styles.TextInput}
        placeholder="Nhập mật khẩu"
        placeholderTextColor={"white"}
        secureTextEntry={true}
      ></TextInput>
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
    borderRadius: "25%",
    borderColor: "white",
    color: "white",
  },
});
export default Login;
