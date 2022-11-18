import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { STATUS_BAR_HEIGHT, SCREEN_HEIGHT } from "../../App/ScreenDefault";
import NewButton from "../../components/NewButton";
import Spacer from "../../components/Spacer";
// import { StartApp } from "../../features/AppStart";
import { setStart } from "../../features/AppStart";

const Register = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setStart(false));
    rootNav.replace("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={handleClick}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../assets/Icon/back.png")}
        />
      </TouchableOpacity>
      <Spacer height="20" />
      <Text style={styles.title}>Đăng ký tài khoản</Text>
      <Spacer height="20" />
      <TextInput style={styles.TextInput} placeholder="Nhập tên tài khoản" />
      <TextInput style={styles.TextInput} placeholder="Nhập tên của bạn" />
      <TextInput style={styles.TextInput} placeholder="Số điện thoại" />
      <TextInput style={styles.TextInput} placeholder="Email" />
      <TextInput style={styles.TextInput} placeholder="Mật khẩu" />
      <Spacer height="40" />
      <NewButton title="Đăng ký" bgColor="#FF005B" color="white" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: "white",
  },
  title: {
    color: "#FF005B",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
  back: {
    marginTop: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    left: 10,
  },
  TextInput: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    borderColor: "#999",
    color: "#999",
    alignSelf: "center",
  },
});
export default Register;
