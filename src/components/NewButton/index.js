import { TouchableOpacity, StyleSheet, Text } from "react-native";

const NewButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.bgColor }]}
      onPress={props.callback}
    >
      <Text style={[styles.text, { color: props.color }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 35,
    borderRadius: 25,
  },
  text: {
    textAlign: "center",
    lineHeight: 35,
    fontWeight: "700",
  },
});
export default NewButton;
