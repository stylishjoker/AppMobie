import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
const props = {
  id: 1,
  linkImg: require("../../../../assets/slider/banner1.jpg"),
  name: "quần áo",
  price: "290000",
  local: "Hà nội",
  callback: () => Alert.alert("hehe"),
};
const win = Dimensions.get("window");
const Product = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <View style={styles.Face}>
        <Image style={styles.Image} source={props.linkImg} />
      </View>
      <View style={styles.Info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>{props.price}đ</Text>
        <Text>{props.local}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
  },

  Face: {},
  Image: {
    width: win,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    color: "#333",
    textTransform: "capitalize",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ff5858",
  },
});
export default Product;
