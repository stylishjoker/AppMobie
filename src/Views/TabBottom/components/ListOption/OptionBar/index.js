import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
const OptionBar = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <View style={styles.Face}>
        <Image style={styles.Image} source={props.require} />
      </View>
      <Text style={styles.Text}>{props.name}</Text>
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
    // padding: 20,
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
  Text: {
    color: "white",
  },
});
export default OptionBar;
