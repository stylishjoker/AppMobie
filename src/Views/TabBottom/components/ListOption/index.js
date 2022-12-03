import { useState } from "react";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import OptionBar from "./OptionBar";
import Toast from "react-native-toast-message";

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
  },
  {
    id: 4,
    name: "Ram",
    require: require("../../../../assets/OptionBar/ram.png"),
  },
  {
    id: 5,
    name: "CPU - Core",
    require: require("../../../../assets/OptionBar/cpu.png"),
  },
  {
    id: 6,
    name: "VGA - Card đồ họa",
    require: require("../../../../assets/OptionBar/vga.png"),
  },
  {
    id: 7,
    name: "Free Ship",
    require: require("../../../../assets/OptionBar/free-shipping.png"),
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
  function showToast() {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  }
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
              callback={showToast}
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
