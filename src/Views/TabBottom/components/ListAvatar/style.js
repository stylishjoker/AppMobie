import { StyleSheet } from "react-native";

import { SCREEN_WiDTH } from "../../../../App/ScreenDefault";

export const ListImg = [
  "https://i.pinimg.com/236x/e0/16/c8/e016c8b43b72b34596a78c74ec1b0676.jpg",
  "https://i.pinimg.com/736x/94/23/cf/9423cfa0eef06028835edb1ec69c21e7.jpg",
  "https://i.pinimg.com/236x/79/72/1d/79721d34f3305fde59caeb72505c5447.jpg",
  "https://i.pinimg.com/236x/79/fe/f5/79fef5665d889df24763be32c3b7809f.jpg",
  "https://i.pinimg.com/236x/af/d4/e3/afd4e355b4d8bbe62786d918569e70f3.jpg",
  "https://i.pinimg.com/736x/58/8d/48/588d487437454f42698711b4a750b48a.jpg",
  "https://i.pinimg.com/236x/88/bf/ab/88bfab1db94cad4f5482ad70b383598d.jpg",
  "https://i.pinimg.com/236x/83/fd/7f/83fd7f1fe4570c55e74d7f3077277528.jpg",
];

export const styles = StyleSheet.create({
  container: {},
  ViewModal: {
    padding: 10,
    backgroundColor: "white",
    width: SCREEN_WiDTH,
    alignSelf: "center",
  },
  contentModal: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    zIndex: 10,
    height: 73,
    width: 73,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderColor: "red",
  },
});
