import { useState } from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import OptionBar from "./OptionBar";

const { width } = Dimensions.get("window");
const widthScrollBar = width * 0.2;
const listOption = [
  {
    id: 1,
    name: "Máy tính",
    require: require("../../../../assets/OptionBar/gaming.png"),
    callback: () => {},
  },
  {
    id: 2,
    name: "Màn hình",
    require: require("../../../../assets/OptionBar/monitor.png"),
    callback: () => {},
  },
  {
    id: 3,
    name: "Laptop",
    require: require("../../../../assets/OptionBar/laptop.png"),
    callback: () => {},
  },
  {
    id: 4,
    name: "Ram",
    require: require("../../../../assets/OptionBar/ram.png"),
    callback: () => {},
  },
  {
    id: 5,
    name: "CPU - Core",
    require: require("../../../../assets/OptionBar/cpu.png"),
    callback: () => {},
  },
  {
    id: 6,
    name: "VGA - Card đồ họa",
    require: require("../../../../assets/OptionBar/vga.png"),
    callback: () => {},
  },
  {
    id: 7,
    name: "Free Ship",
    require: require("../../../../assets/OptionBar/free-shipping.png"),
    callback: () => {},
  },
];
const ListOption = () => {
  const [widthScrollView, setWidthScrollView] = useState(10);
  const onChangeScroll = (event) => {
    const slide =
      ((event.nativeEvent.contentOffset.x *
        (listOption.length / 0.5 / widthScrollBar)) /
        widthScrollBar) *
      100;
    if (slide !== widthScrollView && slide <= widthScrollBar) {
      setWidthScrollView(slide + 5);
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
