import React from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";

import { PRODUCTS, searchResult, BACK_GROUND } from "../../App/store/selector";
import Product from "../TabBottom/components/Product";
import SearchBar from "../TabBottom/components/Searchbar";
import { SCREEN_HEIGHT, STATUS_BAR_HEIGHT } from "../../App/ScreenDefault";
import { setInfoProduct } from "../../features/GetProducts";

const SearchProducts = () => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(PRODUCTS);
  const search = useSelector(searchResult);
  const background = useSelector(BACK_GROUND);
  const HandleClick = (item) => {
    dispatch(setInfoProduct(item));
    rootNav.navigate("InfoProduct");
  };
  return (
    <SafeAreaView
      style={[
        background ? { backgroundColor: "#999" } : { backgroundColor: "white" },
        styles.container,
      ]}
    >
      <SearchBar placeholder="Nhập thông tin sản phẩm" header="Tìm kiếm" />
      <View>
        <View style={styles.title}>
          <Icon name="search" style={{ fontSize: 20 }} />
          <Text>Kêt quả tìm kiếm cho </Text>
          <Text style={styles.search}>{search} </Text>
        </View>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.content}>
            {products ? (
              Array.from(products).map((item, index) => {
                return (
                  <Product
                    callback={() => HandleClick(item)}
                    key={index}
                    imgLink={item.imgLink}
                    name={item.name}
                    price={item.price}
                    local={item.local}
                  />
                );
              })
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    padding: 10,
  },
  search: {
    fontSize: 18,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  ScrollView: {
    height: SCREEN_HEIGHT - 200,
  },
});
export default SearchProducts;
