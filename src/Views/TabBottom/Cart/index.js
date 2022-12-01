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
import React, { useEffect, useState } from "react";
import { remoteOrderProduct } from "../../../features/GetProducts";
import SearchBar from "../components/Searchbar";

const ShoppingCart = ({ navigation }) => {
  const product = useSelector((state) => state.GetProducts.orderProducts);
  const dispatch = useDispatch();
  const[payment,setPayment] = useState(0);
  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getOrderProducts());
    });
  }, [navigation]);
  const handleClick = (id) => {
    dispatch(remoteOrderProduct(id));
  };
  useEffect(()=>{
    const result = product.reduce((total, value) => {
      const temp =
        parseInt(value.number) * parseInt(value.price.split(".").join(""));
      return temp + total;
    }, 0);
    setPayment(result)
  },[product])
  return (
    <SafeAreaView>
      <SearchBar />
      <View style={styles.pay}>
        <Text style={styles.Text}>Tong thanh toan : {payment}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Thanh toan</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={product}
        renderItem={({ item }) => {
          // console.log(item);
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
        }}
        keyExtractor={(value, index) => index.toString()}
        ListEmptyComponent={<></>}
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
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
  },
});
export default ShoppingCart;
