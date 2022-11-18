import { Dimensions, StatusBar } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
const SCREEN_WiDTH = Dimensions.get("window").width; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export { SCREEN_HEIGHT, STATUS_BAR_HEIGHT, WINDOW_HEIGHT, SCREEN_WiDTH };
