import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { PRODUCTS, searchResult, BACK_GROUND } from "../../App/store/selector";
import Product from "../TabBottom/components/Product";
import SearchBar from "../TabBottom/components/Searchbar";
import { SCREEN_HEIGHT } from "../../App/ScreenDefault";

const SearchProducts = () => {
  const products = useSelector(PRODUCTS);
  const search = useSelector(searchResult);
  const background = useSelector(BACK_GROUND);
  return (
    <SafeAreaView
      style={[
        background ? { backgroundColor: "#999" } : { backgroundColor: "white" },
        styles.container,
      ]}
    >
      {/* <SearchBar /> */}
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
        {/* <Spacer height="100" /> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
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
    height: SCREEN_HEIGHT - 120,
  },
});
export default SearchProducts;
