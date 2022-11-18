import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setInput } from "../../../features/SearchBar";
import BASE_URL from "../../../Api/config";
import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
} from "../../../App/ScreenDefault";
import SearchBar from "../components/Searchbar";
import Slider from "../components/Sider";
import ListOption from "../components/ListOption";
import Product from "../components/Product";
import Spacer from "../../../components/Spacer";
const TrangChu = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}` + "/products",
    }).then((response) => setProducts(response.data));
  }, []);
  const HandleClick = (id) => {
    // Alert.alert(`${id}`);
  };
  return (
    <LinearGradient colors={["#c42bb8", "#eae1e1"]}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Trang Chủ</Text>
        </View>
        <View style={styles.searchBar}>
          <SearchBar placeholder="Nhập thông tin sản phẩm" />
        </View>
        <ScrollView style={styles.Content} showsVerticalScrollIndicator={false}>
          <View style={styles.slider}>
            <Slider />
          </View>
          <View style={styles.ListOption}>
            <ListOption />
          </View>
          <View style={styles.listProduct}>
            <View style={styles.listProduct_left}>
              {products ? (
                Array.from(products).map((product, index) => {
                  if (index % 2 == 0) {
                    return (
                      <Product
                        callback={() => Alert.alert("hehe")}
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imgLink={product.imgLink}
                        local={product.local}
                      />
                    );
                  }
                })
              ) : (
                <></>
              )}
              <Spacer height="100" />
            </View>
            <View style={styles.listProduct_right}>
              {products ? (
                Array.from(products).map((product, index) => {
                  if (index % 2 == 1) {
                    return (
                      <Product
                        callback={HandleClick(product.id)}
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imgLink={product.imgLink}
                        local={product.local}
                      />
                    );
                  }
                })
              ) : (
                <></>
              )}
              <Spacer height="100" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
    display: "flex",
    flexDirection: "column",
    height: WINDOW_HEIGHT,
    marginBottom: 100,
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
    color: "white",
    fontWeight: "600",
  },
  searchBar: {
    width: "100%",
    borderColor: "white",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    alignItems: "center",
    zIndex: 100,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  slider: {
    marginTop: 20,
  },
  Content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "auto",
  },
  ListOption: {
    marginLeft: 15,
  },
  listProduct: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  listProduct_left: {
    padding: 10,
    width: "50%",
    height: "100%",
  },
  listProduct_right: {
    padding: 10,
    width: "50%",
  },
});

export default TrangChu;
