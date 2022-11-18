import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ElementSP = (props) => {
  return (
    <TouchableOpacity style={styles.container} key={props.id}>
      <View style={styles.face}>
        <Image
          style={styles.img}
          source={{
            uri: props.url,
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>{props.price} đ</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    borderColor: "red",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "center",
  },
  face: {},
  info: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  name: {
    color: "white",
  },
  price: {
    color: "white",
    marginTop: 10,
  },
  img: {
    width: 50,
    height: 50,
  },
});
export default ElementSP;
