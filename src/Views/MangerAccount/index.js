import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles } from "./style";
import NewTextInput from "../TabBottom/components/NewTextInput";
import AvatarOption from "../TabBottom/components/AvatarOption";
import { SAVE_USER, AVATAR } from "../../App/store/selector";
import NewButton from "../../components/NewButton";
import { updateUser } from "../../features/GetUser";
import Spacer from "../../components/Spacer";
import ListAvatar from "../TabBottom/components/ListAvatar";
import { setAvatar } from "../../features/login";

const ManagerAccount = () => {
  const dispatch = useDispatch();

  const user = useSelector(SAVE_USER);
  const avatar = useSelector(AVATAR);
  const [account, setAccount] = useState(user.account);
  const [fullname, setFullname] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [numberPhone, setNumberPhone] = useState(user.numberPhone);
  const [password, setPassword] = useState(user.password);
  const [update, setUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    const newData = {
      id: user.id,
      account,
      fullname,
      email,
      password,
    };
    dispatch(updateUser(newData));
    Alert.alert("Xác nhận thành công");
    setUpdate(!update);
  };
  const Objects = [
    {
      name: "Tài khoản",
      type: "",
      value: account,
      action: setAccount,
    },
    {
      name: "Họ và tên",
      type: "",
      value: fullname,
      action: setFullname,
    },
    {
      name: "Số điện thoại",
      type: "number-pad",
      value: numberPhone,
      action: setNumberPhone,
    },
    {
      name: "Email",
      type: "",
      value: email,
      action: setEmail,
    },
    {
      name: "Mật khẩu",
      type: "",
      value: password,
      action: setPassword,
    },
  ];
  const cancelUpdate = () => {
    setUpdate(!update);
    setAccount(user.account);
    setAvatar(user.linkImg);
    setEmail(user.email);
    setPassword(user.password);
    setFullname(user.fullname);
    setNumberPhone(user.numberPhone);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>Thông tin cá nhân</Text>
      <View style={styles.Avatar}>
        <AvatarOption linkImg={avatar} />
        <TouchableOpacity
          style={[styles.changeAvatar, { display: update ? "flex" : "none" }]}
          onPress={() => setShow(!show)}
          enabled={!update}
        >
          <Icon style={{ fontSize: 17 }} name="repeat" />
        </TouchableOpacity>
        <ListAvatar show={show} callback={() => setShow(!show)} />
      </View>
      {Objects.map((item, index) => {
        return (
          <NewTextInput
            check={update}
            key={index}
            name={item.name}
            value={item.value}
            callback={(text) => item.action(text)}
            type={item.type}
          />
        );
      })}
      <Spacer height="50" />
      {update ? (
        <>
          <NewButton
            title="Xác nhận"
            bgColor="#F14A20"
            color="white"
            callback={handleSubmit}
          />
          <Spacer height="20" />
          <NewButton title="Hủy" bgColor="#999" callback={cancelUpdate} />
        </>
      ) : (
        <NewButton
          title="Chỉnh sửa"
          bgColor="#F14A20"
          color="white"
          callback={() => setUpdate(!update)}
        />
      )}
    </SafeAreaView>
  );
};

export default ManagerAccount;
