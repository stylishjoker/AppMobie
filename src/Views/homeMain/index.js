import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import TrangChu from "../TabBottom/TrangChu/Trangchu";
import SanPhamBanChay from "../TabBottom/SanPhamBanChay/Sanphambanchay";
import SanPham from "../TabBottom/SanPham/SanPham";
import Profile from "../TabBottom/Profile/Profile";
import ShoppingCart from "../TabBottom/Cart";

const TabComponents = [
  {
    id: 1,
    name: "Trang chủ",
    component: TrangChu,
    icon: "home",
    srcImg: require("../../assets/TabBarIcon/home.png"),
  },
  {
    id: 2,
    name: "Sản phẩm",
    component: SanPham,
    icon: "star",
    srcImg: require("../../assets/TabBarIcon/package.png"),
  },
  {
    id: 3,
    name: "Follow",
    component: SanPhamBanChay,
    icon: "heart",
    srcImg: require("../../assets/TabBarIcon/star.png"),
  },
  {
    id: 4,
    name: "Giỏ hàng",
    component: ShoppingCart,
    icon: "cart-arrow-down",
    srcImg: require("../../assets/Icon/shopping-cart.png"),
  },
  {
    id: 5,
    name: "Cá nhân",
    component: Profile,
    icon: "user",
    srcImg: require("../../assets/TabBarIcon/user.png"),
  },
];
const HomeMain = () => {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator
      initialRouteName="TrangChu"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabbar,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}
    >
      {TabComponents.map((TabComponent) => {
        return (
          <tab.Screen
            key={TabComponent.id}
            name={TabComponent.name}
            component={TabComponent.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Icon
                    style={focused ? styles.iconActive : styles.icon}
                    name={TabComponent.icon}
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
  tabbar: {
    backgroundColor: "#444752",
    height: 60,
    position: "absolute",
    borderRadius: 20,
    margin: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    justifyContent: "center",
  },
  tabBarItemStyle: {
    borderRadius: 20,
    height: 60,
    padding: 10,
    alignItems: "center",
  },
  icon: {
    color: "#999",
    fontSize: 25,
  },
  iconActive: {
    color: "white",
    fontSize: 30,
  },
});
export default HomeMain;
