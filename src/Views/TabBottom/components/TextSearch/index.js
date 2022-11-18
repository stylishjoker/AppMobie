import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const TextSeach = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <Text style={styles.Text}>{props.name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#f6f6f6",
    margin: 8,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  Text: {
    fontSize: 12,
    color: "#333",
  },
});
export default TextSeach;
