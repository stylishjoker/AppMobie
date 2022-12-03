import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const BtnDelete = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <Text style={styles.Text}>{props.name}</Text>
      <Icon style={styles.Icon} name="trash" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    right: 10,
    top: 5,
    alignItems: "baseline",
    justifyContent: "center",
    opacity: 0.4,
  },
  Text: {
    fontSize: 15,
    marginRight: 2,
  },
  Icon: {
    fontSize: 17,
  },
});
export default BtnDelete;
