import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TrangChu from "../TabBottom/Trangchu";
import SanPhamBanChay from "../TabBottom/Sanphambanchay";
import SanPham from "../TabBottom/SanPham";
import Profile from "../TabBottom/Profile";

const TabComponents = [
  {
    id: 1,
    name: "Trang chủ",
    component: TrangChu,
    srcImg: require("../../assets/TabBarIcon/home.png"),
  },
  {
    id: 2,
    name: "Sản phẩm",
    component: SanPham,
    srcImg: require("../../assets/TabBarIcon/package.png"),
  },
  {
    id: 3,
    name: "Sản phẩm bán chạy",
    component: SanPhamBanChay,
    srcImg: require("../../assets/TabBarIcon/star.png"),
  },
  {
    id: 4,
    name: "Cá nhân",
    component: Profile,
    srcImg: require("../../assets/TabBarIcon/user.png"),
  },
];
const HomeMain = () => {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator initialRouteName="TrangChu">
      {TabComponents.map((TabComponent) => {
        return (
          <tab.Screen
            key={TabComponent.id}
            name={TabComponent.name}
            component={TabComponent.component}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <Image
                    source={TabComponent.srcImg}
                    style={styles.img}
                    resizeMode="cover"
                  />
                );
              },
            }}
          />
        );
      })}
    </tab.Navigator>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
});
export default HomeMain;
