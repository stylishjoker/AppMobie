import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

import { STATUS_BAR_HEIGHT } from "../../../../App/ScreenDefault";
import { SAVE_USER } from "../../../../App/store/selector";

const heightHeader = 50;
const Header = (props) => {
  const user = useSelector(SAVE_USER);
  if (!user) {
    return <></>;
  }
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 1.25, y: 1.0 }}
      colors={["#FFE53B", "#FF005B"]}
      style={styles.container}
    >
      <Text style={styles.Text}>{props.name}</Text>
      <TouchableOpacity>
        <Image style={styles.Image} source={{ uri: user.linkImg }} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
    width: "100%",
    height: heightHeader,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  Text: {
    color: "#FF005B",
    fontSize: 20,
    fontWeight: "600",
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Header;
