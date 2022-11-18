import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const border = 5;
const Product = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <View style={styles.Face}>
        <Image style={styles.Image} source={{ uri: props.imgLink }} />
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
    marginBottom: border,
    width: "100%",
    backgroundColor: "white",
    borderRadius: border,
    justifyContent: "center",
  },

  Face: {},
  Image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: border,
    borderTopRightRadius: border,
  },
  Info: {
    padding: 10,
  },
  name: {
    fontSize: 15,
    color: "#333",
    textTransform: "capitalize",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ff5858",
  },
});
export default Product;
