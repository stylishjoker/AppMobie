import { Dimensions, StatusBar } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("screen").height; // device height
export const SCREEN_WiDTH = Dimensions.get("window").width; // device height
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
