import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

import { setInput } from "../../../features/SearchBar";
import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
} from "../../../App/ScreenDefault";
import SearchBar from "../components/Searchbar";
import Slider from "../components/Sider";
import ListOption from "../components/ListOption";
import Product from "../components/Product";

const TrangChu = () => {
  const SearchInput = useSelector((state) => state.SearchResult.input);
  const dispatch = useDispatch();
  return (
    <LinearGradient colors={["#c42bb8", "#eae1e1"]}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Trang Chủ</Text>
        </View>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder="Nhập thông tin sản phẩm"
            value={SearchInput}
            callback={(text) => {
              dispatch(setInput(text));
            }}
          />
        </View>
        <ScrollView style={styles.Content}>
          <View style={styles.slider}>
            <Slider />
          </View>
          <View style={styles.ListOption}>
            <ListOption />
          </View>
          <View style={styles.listProduct}>
            <View style={styles.listProduct_left}>
              <Product />
              <Product />
              <Product />
            </View>
            <View style={styles.listProduct_right}>
              <Product />
              <Product />
              <Product />
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
    padding: 5,
  },
  slider: {
    marginTop: 20,
  },
  Content: {
    display: "flex",
    flexDirection: "column",
  },
  ListOption: {
    marginLeft: 15,
  },
  listProduct: {
    marginTop: 10,
    width: "100%",
    height: 300,
    display: "flex",
    flexDirection: "row",
  },
  listProduct_left: {
    padding: 10,
    width: "50%",
  },
  listProduct_right: {
    padding: 10,
    width: "50%",
  },
});

export default TrangChu;
