import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SCREEN_HEIGHT, SCREEN_WiDTH } from "../../../../App/ScreenDefault";

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
    content: "Quickly find product item you like the most",
    status: false,
  },
  {
    id: 5,
    linkImg: require("../../../../assets/IntroApp/welcome.png"),
    name: "Welcome to App",
    content: "",
    status: true,
  },
];

const IntroApp = (props) => {
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
    <>
      <ScrollView
        pagingEnabled
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        onScroll={(nativeEvent) => onChangeScroll(nativeEvent)}
        scrollEventThrottle={16}
      >
        {contents.map((element) => {
          return (
            <LinearGradient
              key={element.id}
              colors={["#ff0a6c", "#2d27ff"]}
              style={styles.content}
            >
              <Image style={styles.Image} source={element.linkImg} />
              <Text style={[styles.Text, styles.title]}>{element.name}</Text>
              <Text style={[styles.Text, styles.desc]}>{element.content}</Text>
              {element.status ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={props.callback}
                >
                  <Text
                    style={
                      ([styles.Text],
                      { fontSize: 15, color: "white", marginRight: 10 })
                    }
                  >
                    Let's Begin{" "}
                  </Text>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../../../assets/IntroApp/shuttle.png")}
                  />
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
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WiDTH,
    height: SCREEN_HEIGHT,
  },
  dot: {
    // width,
    flexDirection: "row",
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "white",
    margin: 3,
    fontSize: 10,
  },
  TextActive: {
    color: "#333",
    margin: 3,
    fontSize: 10,
  },
  Image: {
    width: 100,
    height: 100,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WiDTH,
    height: SCREEN_HEIGHT,
  },
  title: {
    fontSize: 25,
    marginTop: 25,
    marginBottom: 25,
    textTransform: "capitalize",
  },
  desc: {
    textAlign: "center",
    fontSize: 14,
    padding: 10,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 150,
    height: 40,
    backgroundColor: "#ff0a6c",
    alignItems: "center",
    borderRadius: 25,
  },
});
export default IntroApp;
