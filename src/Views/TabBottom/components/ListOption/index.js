import { useState } from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import OptionBar from "./OptionBar";

const { width } = Dimensions.get("window");
const widthScrollBar = width * 0.2;
const listOption = [
  {
    id: 1,
    name: "Bank",
    require: require("../../../../assets/OptionBar/bank.png"),
    callback: () => {},
  },
  {
    id: 2,
    name: "Ngân hàng",
    require: require("../../../../assets/OptionBar/bank.png"),
    callback: () => {},
  },
  {
    id: 3,
    name: "Mỹ phẩm",
    require: require("../../../../assets/OptionBar/cosmetic.png"),
    callback: () => {},
  },
  {
    id: 4,
    name: "Big sale",
    require: require("../../../../assets/OptionBar/coupon.png"),
    callback: () => {},
  },
  {
    id: 5,
    name: "Free ship",
    require: require("../../../../assets/OptionBar/delivery.png"),
    callback: () => {},
  },
  {
    id: 6,
    name: "Bán chạy",
    require: require("../../../../assets/OptionBar/diamond.png"),
    callback: () => {},
  },
  {
    id: 7,
    name: "Live",
    require: require("../../../../assets/OptionBar/instagram-live.png"),
    callback: () => {},
  },
  {
    id: 8,
    name: "Thời trang",
    require: require("../../../../assets/OptionBar/mannequin.png"),
    callback: () => {},
  },
  {
    id: 9,
    name: "Nạp tiền",
    require: require("../../../../assets/OptionBar/save-money.png"),
    callback: () => {},
  },
  {
    id: 10,
    name: "Shop xịn",
    require: require("../../../../assets/OptionBar/shopping-bag.png"),
    callback: () => {},
  },
];
const ListOption = () => {
  const [widthScrollView, setWidthScrollView] = useState();
  const onChangeScroll = (event) => {
    const slide =
      ((event.nativeEvent.contentOffset.x * 0.126) / widthScrollBar) * 100;
    if (slide !== widthScrollView && slide <= widthScrollBar) {
      setWidthScrollView(slide);
    }
  };
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        onScroll={(nativeEvent) => onChangeScroll(nativeEvent)}
        scrollEventThrottle={16}
      >
        {listOption.map((item) => {
          return (
            <OptionBar
              key={item.id}
              callback={item.callback}
              name={item.name}
              require={item.require}
            />
          );
        })}
      </ScrollView>
      <View style={styles.scrollBar}>
        <View style={[styles.scrollView, { width: widthScrollView }]}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width,
  },
  scrollBar: {
    position: "absolute",
    width: widthScrollBar,
    height: 8,
    borderRadius: 30,
    backgroundColor: "#888",
    bottom: 0,
    alignSelf: "center",
  },
  scrollView: {
    position: "absolute",
    // width: widthScrollView,
    height: 8,
    borderRadius: 30,
    backgroundColor: "white",
    bottom: 0,
  },
});
export default ListOption;
