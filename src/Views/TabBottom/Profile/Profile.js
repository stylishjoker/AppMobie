import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

import ButtonImg from "../../../components/ButtonImg";
import { setStart } from "../../../features/AppStart";
import { STATUS_BAR_HEIGHT } from "../../../App/ScreenDefault";
import { SAVE_USER } from "../../../App/store/selector";

const Profile = () => {
  const rootNav = useNavigation();
  const user = useSelector(SAVE_USER);
  const Objs = [
    {
      id: 1,
      name: "Cài đặt",
      srcImg: require("../../../assets/Icon/settings.png"),
      callback: () => {},
    },
    {
      id: 2,
      name: "Giỏ hàng",
      srcImg: require("../../../assets/Icon/shopping-cart.png"),
      callback: () => {},
    },
    {
      id: 3,
      name: "Quản lý tài khoản",
      srcImg: require("../../../assets/Icon/profile.png"),
      callback: () => {},
    },
    {
      id: 4,
      name: "Thông tin",
      srcImg: require("../../../assets/Icon/info.png"),
      callback: () => {},
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
    <View style={styles.container}>
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
      <View style={styles.option}>
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F4F7",
  },
  option: {
    position: "absolute",
    width: "90%",
    alignItems: "center",
    backgroundColor: "white",
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
});
export default Profile;
