import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import ButtonImg from "../../components/ButtonImg";
import Spacer from "../../components/Spacer";

const Objs = [
  {
    id: 1,
    name: "Cài đặt",
    srcImg: require("../../assets/TabBarIcon/user.png"),
    callback: () => {},
  },
  {
    id: 2,
    name: "Giỏ hàng",
    srcImg: require("../../assets/TabBarIcon/user.png"),
    callback: () => {},
  },
  {
    id: 3,
    name: "Quản lý tài khoản",
    srcImg: require("../../assets/TabBarIcon/user.png"),
    callback: () => {},
  },
  {
    id: 4,
    name: "Thông tin",
    srcImg: require("../../assets/TabBarIcon/user.png"),
    callback: () => {},
  },
  {
    id: 5,
    name: "Đăng xuất",
    srcImg: require("../../assets/TabBarIcon/user.png"),
    callback: () => {},
  },
];
const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.avatar}>
          <Image
            style={styles.Image}
            source={require("../../assets/TabBarIcon/user.png")}
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
              onPress={Obj.callback}
            />
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F4F7",
  },
  option: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 30,
    bottom: 0,
  },
  avatar: {
    padding: 10,
    borderBottomWidth: 5,
    borderBottomRColor: "black",
    borderRadius: 100,
  },
  Image: {
    width: 100,
    height: 100,
  },
});
export default Profile;
