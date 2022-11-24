import { Modal, View } from "react-native";
const WrapperComponent = ({ props }) => {
  return (
    <View>
      <Modal isVisible={true}>{props}</Modal>
    </View>
  );
};
export default WrapperComponent;
