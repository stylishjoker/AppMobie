import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { COLOR } from "../../../../../App/store/selector";
const OptionBar = (props) => {
  const textColor = useSelector(COLOR);

  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <View style={styles.Face}>
        <Image style={styles.Image} source={props.require} />
      </View>
      <Text style={{ color: textColor ? "white" : "#333" }}>{props.name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  Image: {
    width: 20,
    height: 20,
  },
  Face: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
  },
});
export default OptionBar;
