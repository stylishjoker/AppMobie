import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import { INFO_PRODUCTS, SAVE_USER } from "../../App/store/selector";
import {
  SCREEN_WiDTH,
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
} from "../../App/ScreenDefault";
import SearchBar from "../TabBottom/components/Searchbar";
import Icon from "react-native-vector-icons/FontAwesome";
import Spacer from "../../components/Spacer";
import { postOrderProduct } from "../../features/GetProducts";

const InfoProduct = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const product = useSelector(INFO_PRODUCTS);
  const user = useSelector(SAVE_USER);
  const [value, setValue] = useState(1);
  const decrement = () => {
    if (value == 1) {
      setValue(1);
    } else {
      setValue(value - 1);
    }
  };
  const incrementByAmount = () => {
    setValue(value + 1);
  };
  const handleOnChange = (text) => {
    setValue(parseInt(text));
  };
  const handleClick = () => {
    const obj = {
      idPro: product.id,
      iduser: user.id,
      namePro: product.name,
      price: product.price,
      linkImg: product.imgLink,
      number: value.toString(),
      name: user.fullname,
    };
    dispatch(postOrderProduct(obj));
    Alert.alert("Mua hàng thành công !!!", "Tới giỏ hàng", [
      {
        text: "Tiếp tục mua",
        onPress: () => rootNav.navigate("ListProduct"),
      },
      {
        text: "Ok",
        onPress: () => rootNav.navigate("ShoppingCart"),
      },
    ]);
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", marginTop: STATUS_BAR_HEIGHT }}
    >
      <SearchBar placeholder="Nhập thông tin sản phẩm" header="Sản phẩm" />
      <ScrollView style={styles.ScrollView}>
        <Image style={styles.Image} source={{ uri: product.imgLink }} />
        <View style={styles.info}>
          <Text style={styles.price}>{product.price} đ</Text>
          <Text style={styles.name}>{product.name}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Thông số</Text>
          {product ? (
            product.info.map((item, index) => {
              return (
                <Text key={index} style={styles.desc}>
                  <Icon name="arrow-right" /> {item}
                </Text>
              );
            })
          ) : (
            <></>
          )}
          <View style={styles.addCart}>
            <View style={styles.number}>
              <TouchableOpacity style={styles.changNum} onPress={decrement}>
                <Icon name="minus" />
              </TouchableOpacity>
              <TextInput
                onChangeText={handleOnChange}
                value={value.toString()}
                keyboardType="number-pad"
                style={styles.TextInput}
              />
              <TouchableOpacity
                style={styles.changNum}
                onPress={incrementByAmount}
              >
                <Icon name="plus" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buy} onPress={handleClick}>
              <Text style={styles.buyText}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Đánh giá</Text>
          <Text style={{ textAlign: "justify" }}>{product.description}</Text>
          <Spacer height="300" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
  Image: {
    width: SCREEN_WiDTH,
    height: SCREEN_WiDTH * 0.8,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  info: {
    padding: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: "800",
    color: "",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "justify",
  },
  ScrollView: {
    height: SCREEN_HEIGHT - 50,
  },
  description: {
    padding: 10,
  },
  addCart: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  number: {
    borderColor: "#ddd",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  changNum: {
    borderColor: "#ddd",
    borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  buy: {
    backgroundColor: "#777",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  buyText: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },
  TextInput: {
    padding: 5,
    width: 40,
    height: 30,
  },
  desc: {
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
});
export default InfoProduct;
