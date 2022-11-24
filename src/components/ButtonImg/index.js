import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";

const ButtonImg = (props) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={props.callback}>
      <View style={styles.main}>
        <View style={styles.boxImg}>
          <Image style={styles.Image} source={props.src} resizeMode="cover" />
        </View>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../assets/Icon/right-arrow.png")}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontSize: 17,
    textTransform: "capitalize",
    fontWeight: "600",
    marginLeft: 20,
    lineHeight: 50,
  },
  Image: {
    width: 30,
    height: 30,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxImg: {
    padding: 10,
    // backgroundColor: "#F5F4F7",
    borderRadius: 10,
  },
});
export default ButtonImg;
