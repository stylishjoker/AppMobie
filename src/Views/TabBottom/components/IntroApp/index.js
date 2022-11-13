import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const contents = [
  {
    id: 1,
    linkImg: require("../../../../assets/IntroApp/fashion.png"),
    name: "Browser product",
    content: "Welcome to our shop app Login and checkout our great product",
    status: false,
  },
  {
    id: 2,
    linkImg: require("../../../../assets/IntroApp/delivery.png"),
    name: "Delivery",
    content:
      "The delivery dates and addresses are those in the Order. Time shall be of the essence in respect of the Supplier/Service Provider’s obligations under the Order.",
    status: false,
  },
  {
    id: 3,
    linkImg: require("../../../../assets/IntroApp/booking.png"),
    name: "make reservations",
    content: "Book a table in advance to avoid waitting in line",
    status: false,
  },
  {
    id: 4,
    linkImg: require("../../../../assets/IntroApp/search.png"),
    name: "Quick search",
    content: "Quickly find product item",
    status: false,
  },
  {
    id: 5,
    linkImg: require("../../../../assets/IntroApp/welcome.png"),
    name: "Welcome to App",
    content: "Let's go",
    status: true,
  },
];

const IntroApp = () => {
  const [dot, setDot] = useState(0);
  //   const onChangeScroll = (event) => {
  //     const slide = Math.ceil(
  //       event.nativeEvent.contentOffset.x /
  //         event.nativeEvent.layoutMeasurement.width
  //     );
  //     if (slide !== dot) {
  //       setDot(slide);
  //     }
  //   };
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 100,
        width: 100,
        marginTop: 100,
      }}
    >
      <TouchableOpacity style={{ marginTop: 100 }}>
        <Text>Clickme</Text>
      </TouchableOpacity>
      {/* <ScrollView
        pagingEnabled
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        onScroll={(nativeEvent) => onChangeScroll(nativeEvent)}
        scrollEventThrottle={16}
      >
        {contents.map((element) => {
          return (
            <LinearGradient colors={["red", "white"]}>
              <Image source={element.linkImg} />
              <Text>{element.name}</Text>
              <Text>{element.content}</Text>
              {element.status ? (
                <TouchableOpacity onPress={props.callback}>
                  <Text>Let's go </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </LinearGradient>
          );
        })}
      </ScrollView>
      <View style={styles.dot}>
        {contents.map((k, i) => {
          return (
            <Text key={i} style={i == dot ? styles.TextActive : styles.Text}>
              ⬤
            </Text>
          );
        })}
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  dot: {},
});
export default IntroApp;
