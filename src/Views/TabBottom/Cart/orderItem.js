import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import { SCREEN_WiDTH } from "../../../App/ScreenDefault";
const OrderItem = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.Image}
        resizeMode="cover"
        source={{
          uri: props.img,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.info}>
          <Text>{props.price}</Text>
          <Text>{props.number}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.delete} onPress={props.callback}>
        <Text>Xóa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WiDTH,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    backgroundColor: "#999",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    margin: 5,
  },
  content: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  Image: {
    width: 150 * 0.98,
    height: "100%",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 4,
  },
  delete: {
    position: "absolute",
    top: "20%",
    right: 10,
    padding: 10,
    backgroundColor: "#555",
    borderRadius: 5,
  },
  name: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 6,
  },
});
export default OrderItem;
