import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  Text: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
  },
  Avatar: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  changeAvatar: {
    position: "absolute",
    bottom: 7,
    zIndex: 10,
    backgroundColor: "#999",
    padding: 3,
    borderRadius: 50,
    alignItems: "center",
  },
});
