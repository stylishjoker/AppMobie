import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { SCREEN_WiDTH } from "../../../App/ScreenDefault";
import NewButton from "../../../components/NewButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
const Payment = (props) => {
  const [payment, setPayment] = useState(false);
  const handleClick = () => {
    setPayment(!payment);
  };
  return (
    <Modal style={styles.container} isVisible={props.show}>
      <View style={styles.content}>
        <Text
          style={[
            styles.Text,
            {
              borderBottomWidth: 1,
              padding: 3,
            },
          ]}
        >
          Thành tiền : {props.total} Đ
        </Text>
        <Text style={styles.Text}>Phương thức thanh toán :</Text>
        <View style={styles.payment}>
          <TouchableOpacity
            style={[styles.TouchableOpacity, { borderWidth: payment ? 0 : 3 }]}
            onPress={handleClick}
          >
            <Icon style={{ fontSize: 15 }} name="bank" />
            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginLeft: 4,
                fontWeight: "600",
              }}
            >
              Bank
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.TouchableOpacity, { borderWidth: payment ? 3 : 0 }]}
            onPress={handleClick}
          >
            <Icon style={{ fontSize: 15 }} name="google-wallet" />
            <Text
              style={{
                fontSize: 15,
                color: "white",
                marginLeft: 4,
                fontWeight: "600",
              }}
            >
              Ví điện tử
            </Text>
          </TouchableOpacity>
        </View>

        <NewButton
          title="Xác nhận thanh toán"
          color="white"
          bgColor="red"
          callback={props.confirm}
        />
        <TouchableOpacity style={styles.cancel} onPress={props.callback}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
    width: SCREEN_WiDTH,
    height: 300,
    backgroundColor: "white",
  },
  Text: {
    fontSize: 20,
    paddingBottom: 10,
  },
  payment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  TouchableOpacity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    backgroundColor: "#999",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  cancel: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#999",
    right: 0,
    margin: 5,
    borderRadius: 5,
  },
});
export default Payment;
