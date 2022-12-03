import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { SCREEN_HEIGHT } from "../../App/ScreenDefault";
import NewButton from "../../components/NewButton";
import Spacer from "../../components/Spacer";
import { setStart } from "../../features/AppStart";
import ListAvatar from "../TabBottom/components/ListAvatar";
import { AVATAR } from "../../App/store/selector";
import { postUser } from "../../features/GetUser";

const Register = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const [account, setAccount] = useState();
  const [fullname, setFullname] = useState();
  const [numberPhone, setNumberPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const avatar = useSelector(AVATAR);

  const handleClick = () => {
    dispatch(setStart(false));
    rootNav.replace("Home");
  };
  const handleRegist = () => {
    const newData = {
      account,
      email,
      password,
      fullname,
      linkImg: avatar,
    };
    console.log(newData);
    dispatch(postUser(newData));
    rootNav.navigate("Home");
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
      <TextInput
        value={account}
        onChangeText={(text) => setAccount(text)}
        style={styles.TextInput}
        placeholder="Nhập tên tài khoản"
      />
      <TextInput
        value={fullname}
        onChangeText={(text) => setFullname(text)}
        style={styles.TextInput}
        placeholder="Nhập tên của bạn"
      />
      <View style={styles.formGroup}>
        <TextInput
          keyboardType="number-pad"
          value={numberPhone}
          onChangeText={(text) => setNumberPhone(text)}
          style={styles.Number}
          placeholder="Số điện thoại"
        />
        <TouchableOpacity style={styles.avatar} onPress={() => setShow(!show)}>
          <Text style={styles.Text}>Chọn avatar</Text>
        </TouchableOpacity>
        <ListAvatar show={show} callback={() => setShow(!show)} />
      </View>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.TextInput}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.TextInput}
        placeholder="Mật khẩu"
      />
      <Spacer height="40" />
      <NewButton
        title="Đăng ký"
        bgColor="#FF005B"
        color="white"
        callback={handleRegist}
      />
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
    marginTop: StatusBar.currentHeight,
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
  formGroup: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  Number: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    height: 40,
    flex: 2,
    borderColor: "#999",
  },
  avatar: {
    flex: 1,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#999",
    marginLeft: 6,
    borderRadius: 25,
  },
  Text: {
    color: "white",
    fontWeight: "500",
  },
});
export default Register;
