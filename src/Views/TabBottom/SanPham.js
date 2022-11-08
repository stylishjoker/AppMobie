import { View, Text, StyleSheet, ScrollView } from "react-native";

import ElementSP from "./ElementSP";
const props = [
  {
    id: 1,
    name: "LOL",
    price: "100000",
    url: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 2,
    name: "LOL",
    price: "100000",
    url: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 3,
    name: "LOL",
    price: "100000",
    url: "https://reactnative.dev/img/tiny_logo.png",
  },
];
const SanPham = () => {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={styles.container}>
        <Text style={styles.text}>List sản phẩm</Text>
        {props.map((_element) => {
          return (
            <ElementSP
              key={_element.id}
              name={_element.name}
              price={_element.price}
              url={_element.url}
            />
          );
        })}
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>List sản phẩm</Text>
        {props.map((_element) => {
          return (
            <ElementSP
              key={_element.id}
              name={_element.name}
              price={_element.price}
              url={_element.url}
            />
          );
        })}
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>List sản phẩm</Text>
        {props.map((_element) => {
          return (
            <ElementSP
              key={_element.id}
              name={_element.name}
              price={_element.price}
              url={_element.url}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
export default SanPham;
