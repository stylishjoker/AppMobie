import React from "react";
import { View, StyleSheet } from "react-native";

const WrapperSP = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text>Sản phẩm</Text>
      {props}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WrapperSP;
