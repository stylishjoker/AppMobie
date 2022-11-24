import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";

import { COLOR, BACK_GROUND } from "../../../../App/store/selector";
import { setColor, setBackground } from "../../../../features/Theme";
const ModalSetting = (props) => {
  const dispatch = useDispatch();
  const [valueSwitch, setValueSwitch] = useState(false);
  const textColor = useSelector(COLOR);
  const backgroundColor = useSelector(BACK_GROUND);
  const handleOnChange = () => {
    setValueSwitch(!valueSwitch);
    dispatch(setColor(!textColor));
    dispatch(setBackground(!backgroundColor));
  };
  return (
    <Modal
      style={styles.Modal}
      isVisible={props.show}
      onBackdropPress={props.callback}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Giao diện :</Text>
        <View style={styles.content}>
          <Text style={styles.text}>{valueSwitch ? "Trắng" : "Mặc định"}</Text>
          <Switch value={valueSwitch} onChange={handleOnChange} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Modal: {},
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
});
export default ModalSetting;
