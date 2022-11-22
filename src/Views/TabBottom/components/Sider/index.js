import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { useState } from "react";

const widthScreen = Dimensions.get("window").width;
const width = widthScreen * 0.98;
const height = width * 0.5;
const images = [
  require("../../../../assets/slider/31-1.png"),
  require("../../../../assets/slider/32-1.png"),
  require("../../../../assets/slider/33-1.png"),
  require("../../../../assets/slider/banner1.jpg"),
  require("../../../../assets/slider/banner2.jpg"),
  require("../../../../assets/slider/banner3.jpg"),
  require("../../../../assets/slider/banner4.jpg"),
];

const Slider = () => {
  const [dot, setDot] = useState(0);
  const onChangeScroll = (event) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== dot) {
      setDot(slide);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        style={{ width, height }}
        showsHorizontalScrollIndicator={false}
        onScroll={(nativeEvent) => onChangeScroll(nativeEvent)}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              source={image}
              resizeMode="cover"
              style={[{ width, height }, styles.Image]}
            />
          );
        })}
      </ScrollView>
      <View style={styles.dot}>
        {images.map((k, i) => {
          return (
            <Text key={i} style={i == dot ? styles.TextActive : styles.Text}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#888",
    margin: 3,
    fontSize: 10,
  },
  TextActive: {
    color: "white",
    margin: 3,
    fontSize: 10,
  },
  Image: {
    borderRadius: 10,
  },
});
export default Slider;
