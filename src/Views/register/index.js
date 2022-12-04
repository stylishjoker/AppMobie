import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { SCREEN_HEIGHT } from "../../App/ScreenDefault";
import NewButton from "../../components/NewButton";
import Spacer from "../../components/Spacer";
import { setStart } from "../../features/AppStart";
import ListAvatar from "../TabBottom/components/ListAvatar";
import { AVATAR } from "../../App/store/selector";
import { postUser } from "../../features/GetUser";
import { styles, ValidateObj } from "./style";

const Register = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");
  const [fullname, setFullname] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errrorAccount, setErrrorAccount] = useState("");
  const [errorFullname, setErrorFullname] = useState("");
  const [errorNumberPhone, setErrorNumberPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [show, setShow] = useState(false);
  const avatar = useSelector(AVATAR);

  const handleClick = () => {
    dispatch(setStart(false));
    rootNav.replace("Home");
  };
  useEffect(() => {}, []);
  const handleRegist = () => {
    setErrorEmail(ValidateObj.CheckEmail(email));
    setErrrorAccount(ValidateObj.CheckAccount(account));
    setErrorNumberPhone(ValidateObj.checkNumberPhone(numberPhone));
    setErrorFullname(ValidateObj.checkFullName(fullname));
    setErrorPassword(ValidateObj.checkPassword(password));
    const resutl =
      errorEmail +
      errorFullname +
      errorNumberPhone +
      errorPassword +
      errrorAccount;
    if (resutl === "") {
      const newData = {
        account,
        email,
        password,
        fullname,
        linkImg: avatar,
      };
      dispatch(postUser(newData));
      Alert.alert("Đăng ký thành công", "Quay lại đăng nhập", [
        {
          text: "OK",
          onPress: () => rootNav.navigate("Home"),
        },
      ]);
    }
  };
  const ValidateEmail = () => {
    setErrorEmail(ValidateObj.CheckEmail(email));
  };
  const ValidateAccount = () => {
    setErrrorAccount(ValidateObj.CheckAccount(account));
  };
  const ValidateFullName = () => {
    setErrorFullname(ValidateObj.checkFullName(fullname));
  };
  const ValidateNumberPhone = () => {
    setErrorNumberPhone(ValidateObj.checkNumberPhone(numberPhone));
  };
  const ValidatePassword = () => {
    setErrorPassword(ValidateObj.checkPassword(password));
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
        onBlur={ValidateAccount}
        value={account}
        onChangeText={(text) => setAccount(text)}
        style={[
          styles.TextInput,
          { borderColor: errrorAccount ? "red" : "#999" },
        ]}
        placeholder="Nhập tên tài khoản"
      />
      <Text style={styles.error}>{errrorAccount}</Text>
      <TextInput
        value={fullname}
        onChangeText={(text) => setFullname(text)}
        style={[
          styles.TextInput,
          { borderColor: errorFullname ? "red" : "#999" },
        ]}
        placeholder="Nhập tên của bạn"
        onBlur={ValidateFullName}
      />
      <Text style={styles.error}>{errorFullname}</Text>
      <View style={styles.formGroup}>
        <TextInput
          keyboardType="number-pad"
          value={numberPhone}
          onChangeText={(text) => setNumberPhone(text)}
          style={[
            styles.Number,
            { borderColor: errorNumberPhone ? "red" : "#999" },
          ]}
          onBlur={ValidateNumberPhone}
          placeholder="Số điện thoại"
        />
        <TouchableOpacity style={styles.avatar} onPress={() => setShow(!show)}>
          <Text style={styles.Text}>Chọn avatar</Text>
        </TouchableOpacity>
        <ListAvatar show={show} callback={() => setShow(!show)} />
      </View>
      <Text style={styles.error}>{errorNumberPhone}</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={[styles.TextInput, { borderColor: errorEmail ? "red" : "#999" }]}
        onBlur={ValidateEmail}
        placeholder="Email"
      />
      <Text style={styles.error}>{errorEmail}</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={[
          styles.TextInput,
          { borderColor: errorPassword ? "red" : "#999" },
        ]}
        placeholder="Mật khẩu"
        onBlur={ValidatePassword}
      />
      <Text style={styles.error}>{errorPassword}</Text>
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

export default Register;
