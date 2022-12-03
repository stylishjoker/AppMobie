import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import OrderItem from "./orderItem";
import { useSelector, useDispatch } from "react-redux";
import { getOrderProducts } from "../../../features/GetProducts";
import { remoteOrderProduct } from "../../../features/GetProducts";
import { SAVE_USER } from "../../../App/store/selector";
import SearchBar from "../components/Searchbar";
import Payment from "./payment";

const ShoppingCart = ({ navigation }) => {
  const product = useSelector((state) => state.GetProducts.orderProducts);
  const user = useSelector(SAVE_USER);
  const dispatch = useDispatch();
  const [payment, setPayment] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getOrderProducts());
    });
  }, [navigation]);
  const handleClick = (id) => {
    dispatch(remoteOrderProduct(id));
  };
  useEffect(() => {
    const result = product.reduce((total, value) => {
      var temp = 0;
      if (value.iduser === user.id) {
        temp =
          parseInt(value.number) * parseInt(value.price.split(".").join(""));
      }
      return temp + total;
    }, 0);
    setPayment(result);
  }, [product]);
  return (
    <SafeAreaView>
      <SearchBar />
      <View style={styles.pay}>
        <Text style={styles.Text}>Tổng thanh toán: {payment}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
          <Text style={styles.textBuy}>Thanh toán</Text>
        </TouchableOpacity>
        <Payment show={show} total={payment} />
      </View>
      <FlatList
        data={product}
        renderItem={({ item }) => {
          if (item.iduser === user.id) {
            return (
              <OrderItem
                key={item.id}
                name={item.name}
                img={item.linkImg}
                number={item.number}
                price={item.price}
                callback={() => handleClick(item.id)}
              />
            );
          }
        }}
        keyExtractor={(value, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  Text: {
    fontSize: 15,
  },
  button: {
    backgroundColor: "#888",
    padding: 15,
    borderRadius: 10,
  },
  textBuy: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
});
export default ShoppingCart;
