import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageBar}>
        <Image
          style={styles.Image}
          source={require("../../../../assets/Icon/search.png")}
          resizeMode="stretch"
        />
      </View>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder}
        onChangeText={props.callback}
        value={props.value}
      />
      <LinearGradient
        colors={["#f857a6", "#ff5858"]}
        style={styles.TouchableOpacity}
      >
        <TouchableOpacity>
          <Text style={styles.Text}>Search</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingRight: 3,
    paddingLeft: 5,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#F7C6C9",
  },
  TextInput: {
    flex: 5,
    height: 40,
    margin: 12,
    borderWidth: 0,
  },
  Image: {
    width: 30,
    height: 30,
  },
  TouchableOpacity: {
    flex: 2,
    height: 40,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 50,
    right: 0,
  },
  ImageBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  Text: {
    lineHeight: 40,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: "white",
  },
});
export default SearchBar;
