import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const AvatarOption = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.Image]}
        source={{
          uri: props.linkImg,
        }}
        resizeMethod="resize"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    borderRadius: 50,
    margin: 7,
  },
  Image: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
});
export default AvatarOption;
