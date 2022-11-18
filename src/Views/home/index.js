import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NewButton from "../../components/NewButton";
import Login from "../login";
import Spacer from "../../components/Spacer";
import HomeMain from "../homeMain";
import { setIsLoading, setUserToken } from "../../features/keepLogin";
import IntroApp from "../TabBottom/components/IntroApp";
import { startApp, keepLogin } from "../../App/store/selector";
import { setStart } from "../../features/AppStart";
const Home = () => {
  const rootNav = useNavigation();

  const isLoading = useSelector(keepLogin);
  const start = useSelector(startApp);
  const dispatch = useDispatch();
  useEffect(() => {
    handleKeepLogin();
  }, []);

  const handleKeepLogin = async () => {
    const result = await AsyncStorage.getItem("user");
    return result !== null
      ? dispatch(setIsLoading(false))
      : dispatch(setIsLoading(true));
  };
  const StartApp = () => {
    return (
      <>
        {start ? (
          <IntroApp callback={() => dispatch(setStart(false))} />
        ) : (
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
                callback={() => rootNav.navigate("Register")}
                title="Đăng ký"
                bgColor="red"
                color="white"
              />
            </View>
            <TouchableOpacity
              style={styles.Back}
              onPress={() => dispatch(setStart(true))}
            >
              <Image
                source={require("../../assets/Icon/backButton.png")}
                style={styles.backImg}
              />
            </TouchableOpacity>
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
  Back: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "white",
    top: 50,
    left: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  backImg: {
    width: 30,
    height: 30,
  },
});
export default Home;
