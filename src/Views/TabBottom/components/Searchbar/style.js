import { StyleSheet } from "react-native";
import { SCREEN_WiDTH, SCREEN_HEIGHT } from "../../../../App/ScreenDefault";
export const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    width: SCREEN_WiDTH,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#999",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  header: {
    fontSize: 18,
    padding: 5,
    fontWeight: "600",
  },
  SearchBar: {
    borderTopColor: "white",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  back: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
  Icon: {
    fontSize: 25,
    color: "#333",
  },
  TextInput: {
    flex: 5,
    height: 40,
    borderWidth: 0,
    backgroundColor: "white",
    marginLeft: 10,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    paddingLeft: 10,
    flex: 10,
  },
  Image: {
    width: 30,
    height: 30,
  },
  TouchableOpacity: {
    flex: 1,
    height: 40,
    paddingRight: 5,
    paddingLeft: 5,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 13,
    borderTopRightRadius: 13,
  },
  ImageBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  Text: {
    fontWeight: "600",
    color: "white",
  },
  searchResult: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WiDTH,
    display: "flex",
    flexDirection: "column",
    left: 0,
    backgroundColor: "white",
  },
  noneSearchResult: {
    display: "none",
  },
  historySearch: {},
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },
  content: {
    borderTopColor: "#999",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  clearHistory: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    right: 5,
    top: 5,
    alignItems: "center",
    opacity: 0.4,
    backgroundColor: "red",
    padding: 8,
  },
});
