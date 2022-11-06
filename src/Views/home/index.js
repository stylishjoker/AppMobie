import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NewButton from "../../components/NewButton";
import Login from "../login";
import Spacer from "../../components/Spacer";
import BASE_URL from "../../Api/config";
import HomeMain from "../homeMain";
import { setIsLoading, setUserToken } from "../../features/keepLogin";

const Home = () => {
  const rootNav = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(true);
  const account = useSelector((state) => state.login.account);
  const password = useSelector((state) => state.login.password);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}`,
    }).then((response) => setUser(response.data.user));
  }, []);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };
  // if (getData) {
  //   setLoading(false);
  // }

  // console.log(getUser);
  const handleLogin = async () => {
    if (user.account == account && user.password == password) {
      const NewUser = {
        account,
        password,
      };
      storeData(NewUser);
      const getUser = AsyncStorage.getItem("user");
      console.log(getUser);
      rootNav.navigate("HomeMain");
    } else {
      Alert.alert("Tài khoản hoặc mật khẩu không chính xác!!!");
    }
  };
  return (
    <>
      {loading ? (
        <ImageBackground
          source={require("../../assets/background/Background001.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}>
            <Text style={styles.text}>Welcome Back</Text>
            <Spacer height="40" />
            <Text style={styles.title}>Đăng nhập</Text>
            <Spacer height="20" />
            <Login />
            <Spacer height="20" />
            <NewButton
              callback={handleLogin}
              title="Đăng nhập"
              bgColor="#333"
              color="white"
            />
            <Spacer height="20" />
            <NewButton
              callback={() => rootNav.navigate("Register")}
              title="Đăng ký"
              bgColor="red"
              color="white"
            />
          </View>
        </ImageBackground>
      ) : (
        <HomeMain />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
export default Home;
