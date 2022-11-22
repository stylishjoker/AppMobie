import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Spacer from "../../../../components/Spacer";

const border = 5;
const Product = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <View style={styles.Face}>
        <Image style={styles.Image} source={{ uri: props.imgLink }} />
      </View>
      <Spacer height="150" />
      <View style={styles.Info}>
        <View style={{ flexDirection: "row", width: 150 }}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.price}>{props.price}đ</Text>
        <Text>{props.local}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: border,
    width: 150,
    backgroundColor: "white",
    borderRadius: border,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    margin: 5,
  },

  Face: {
    position: "absolute",
    top: 0,
    width: 150,
    height: 150,
  },
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
    flexWrap: "wrap",
    color: "#333",
    textTransform: "capitalize",
    width: "95%",
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ff5858",
  },
});
export default Product;
