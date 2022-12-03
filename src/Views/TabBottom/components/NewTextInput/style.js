import { StyleSheet } from "react-native";
import { SCREEN_WiDTH } from "../../../../App/ScreenDefault";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: SCREEN_WiDTH - 20,
    alignSelf: "center",
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
  Text: {
    fontSize: 15,
    marginTop: 6,
    marginBottom: 3,
  },
});
