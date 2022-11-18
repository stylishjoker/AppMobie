import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
    name: "Giỏ hàng",
    component: ShoppingCart,
    srcImg: require("../../assets/Icon/shopping-cart.png"),
  },
  {
    id: 5,
    name: "Cá nhân",
    component: Profile,
    srcImg: require("../../assets/TabBarIcon/user.png"),
  },
];
const HomeMain = () => {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator
      initialRouteName="TrangChu"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Favourites") {
            iconName = focused ? "ios-heart-sharp" : "ios-heart-outline";
          }
        },
        tabBarActiveTintColor: "#FC007A",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
          flexDirection: "row",
          paddingVertical: 5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
          position: "absolute",
          shadowColor: "#333",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,

          elevation: 18,
          justifyContent: "center",
        },
        tabBarLabelStyle: { paddingBottom: 3 },
      })}
    >
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
