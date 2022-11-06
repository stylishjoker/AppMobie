import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TrangChu from "../TabBottom/Trangchu";
import SanPhamBanChay from "../TabBottom/Sanphambanchay";
import SanPham from "../TabBottom/SanPham";

const HomeMain = () => {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator initialRouteName="">
      <tab.Screen
        name="TrangChu"
        component={TrangChu}
        options={{ headerShown: false }}
      />
      <tab.Screen
        name="Sản phẩm bán chạy"
        component={SanPham}
        options={{ headerShown: false }}
      />
      <tab.Screen
        name="Sản phẩm"
        component={SanPhamBanChay}
        options={{ headerShown: false }}
      />
    </tab.Navigator>
  );
};
export default HomeMain;
