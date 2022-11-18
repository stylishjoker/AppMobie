import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import ButtonImg from "../../../components/ButtonImg";
import Spacer from "../../../components/Spacer";
import { setStart } from "../../../features/AppStart";
import { startApp } from "../../../App/store/selector";
import { STATUS_BAR_HEIGHT } from "../../../App/ScreenDefault";

const Profile = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
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
              uri: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/309862836_804402590874121_9045085778156257386_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jloLVoM1ThQAX8bFSyo&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBUzQw0un2RyKoUuUjNneOsZpZ_9OMUeU97l8O9jJzo-g&oe=637CE13A",
            }}
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
      <Spacer height="120" />
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
    // position: "absolute",
    // alignSelf: "center",
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
});
export default Profile;
