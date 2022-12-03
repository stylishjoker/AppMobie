import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-native-modal";

import ButtonImg from "../../../components/ButtonImg";
import { setStart } from "../../../features/AppStart";
import { SAVE_USER, BACK_GROUND } from "../../../App/store/selector";
import ModalSetting from "./setting";

const Profile = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(SAVE_USER);
  const [show, setShow] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const backgroundColor = useSelector(BACK_GROUND);
  const toggleModal = () => {
    setShow(!show);
  };
  const Objs = [
    {
      id: 1,
      name: "Cài đặt",
      srcImg: require("../../../assets/Icon/settings.png"),
      callback: () => setShowSetting(!showSetting),
    },
    {
      id: 2,
      name: "Giỏ hàng",
      srcImg: require("../../../assets/Icon/shopping-cart.png"),
      callback: () => rootNav.navigate("ShoppingCart"),
    },
    {
      id: 3,
      name: "Quản lý tài khoản",
      srcImg: require("../../../assets/Icon/profile.png"),
      callback: () => rootNav.navigate("AccountManager"),
    },
    {
      id: 4,
      name: "Thông tin",
      srcImg: require("../../../assets/Icon/info.png"),
      callback: toggleModal,
    },
    {
      id: 5,
      name: "Đăng xuất",
      srcImg: require("../../../assets/Icon/logout.png"),
      callback: () => {
        dispatch(setStart(false));
        AsyncStorage.removeItem("user");
        rootNav.replace("Home");
      },
    },
  ];
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: backgroundColor ? "#555" : "#F5F4F7" },
      ]}
    >
      <TouchableOpacity>
        <View style={styles.avatar}>
          <Image
            style={styles.Image}
            source={{
              uri: user.linkImg,
            }}
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.fullname}>{user.fullname}</Text>
      <View
        style={[
          styles.option,
          { backgroundColor: backgroundColor ? "#333" : "white" },
        ]}
      >
        {Objs.map((Obj) => {
          return (
            <ButtonImg
              key={Obj.id}
              name={Obj.name}
              src={Obj.srcImg}
              callback={Obj.callback}
            />
          );
        })}
        <Modal
          style={styles.Modal}
          isVisible={show}
          onBackdropPress={toggleModal}
        >
          <View style={styles.ModalContent}>
            <Text style={styles.info}>
              Cảm ơn khách hàng đã sử dựng ứng dựng của tôi{" "}
            </Text>
          </View>
        </Modal>
        <ModalSetting
          show={showSetting}
          callback={() => setShowSetting(!showSetting)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  option: {
    position: "absolute",
    width: "90%",
    alignItems: "center",
    borderRadius: 50,
    padding: 30,
    bottom: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  avatar: {
    padding: 10,
    borderBottomWidth: 5,
    borderBottomRColor: "black",
    borderRadius: 50,
    top: "20%",
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  fullname: {
    fontSize: 40,
    marginTop: 30,
    fontWeight: "600",
  },
  ModalContent: {
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  info: {
    fontSize: 20,
    alignSelf: "center",
  },
});
export default Profile;
