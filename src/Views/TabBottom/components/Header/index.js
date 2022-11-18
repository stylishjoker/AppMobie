import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const heightHeader = 50;
const Header = (props) => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 1.25, y: 1.0 }}
      colors={["#FFE53B", "#FF005B"]}
      style={styles.container}
    >
      <Text style={styles.Text}>{props.name}</Text>
      <TouchableOpacity>
        {/* <Image style={styles.Image} source={{ uri: props.linkImg }} /> */}
        <Image
          style={styles.Image}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: heightHeader,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  Text: {
    color: "#FF005B",
    fontSize: 20,
    fontWeight: "600",
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Header;
