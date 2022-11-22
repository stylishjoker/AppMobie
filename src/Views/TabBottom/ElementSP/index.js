import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const widthImg = 100;
const heightImg = 100;
const ElementSP = (props) => {
  return (
    <TouchableOpacity style={styles.container} key={props.id}>
      <View style={styles.face}>
        <Image
          style={styles.img}
          source={{
            uri: props.url,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.info}>
        <View style={{ flexDirection: "row", width: 250 }}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.price}>{props.price} đ</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",

    borderColor: "red",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.2,
    shadowRadius: 11.95,

    elevation: 18,
    marginTop: 10,
  },
  face: {},
  info: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 13,
    flex: 1,
    flexWrap: "wrap",
    color: "#333",
    textTransform: "capitalize",
    width: "100%",
  },
  price: {
    color: "#FF005B",
    marginTop: 10,
    fontWeight: "600",
  },
  img: {
    width: widthImg,
    height: heightImg,
    borderRadius: 5,
  },
});
export default ElementSP;
