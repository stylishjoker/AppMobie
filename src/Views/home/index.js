import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Button,
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
import IntroApp from "../TabBottom/components/IntroApp";
const Home = () => {
  const rootNav = useNavigation();
  const [user, setUser] = useState(true);
  const account = useSelector((state) => state.login.account);
  const password = useSelector((state) => state.login.password);
  const isLoading = useSelector((state) => state.keepLogin.isLoading);
  const [start, setStart] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}`,
    }).then((response) => setUser(response.data.user));
    handleKeepLogin();
  }, []);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const handleKeepLogin = async () => {
    const result = await AsyncStorage.getItem("user");
    return result !== null
      ? dispatch(setIsLoading(false))
      : dispatch(setIsLoading(true));
  };
  // handleKeepLogin();

  const handleLogin = async () => {
    if (user.account == account && user.password == password) {
      const NewUser = {
        account,
        password,
      };
      storeData(NewUser);

      rootNav.navigate("HomeMain");
    } else {
      Alert.alert("Tài khoản hoặc mật khẩu không chính xác!!!");
    }
  };
  const StartApp = () => {
    return (
      <>
        {start ? (
          <IntroApp />
        ) : (
          // <Button onPress={() => setStart(!start)} title="click me" />
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
        )}
      </>
    );
  };
  return <>{isLoading ? <StartApp /> : <HomeMain />}</>;
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
