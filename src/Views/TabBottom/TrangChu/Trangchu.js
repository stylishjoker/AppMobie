import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import BASE_URL from "../../../Api/config";
import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
} from "../../../App/ScreenDefault";
import SearchBar from "../components/Searchbar";
import Slider from "../components/Sider";
import ListOption from "../components/ListOption";
import NewScrollView from "../components/NewScrollView";
import { getLaptops } from "../../../features/GetLaptop";
import { LAPTOPS, SCREENS } from "../../../App/store/selector";
import { getScreens } from "../../../features/GetScreen";
import Spacer from "../../../components/Spacer";

const TrangChu = () => {
  const dispatch = useDispatch();
  const laptops = useSelector(LAPTOPS);
  const screens = useSelector(SCREENS);
  const listProducts = [
    {
      title: "laptop",
      obj: laptops,
    },
    {
      title: "screen",
      obj: screens,
    },
  ];
  useEffect(() => {
    dispatch(getLaptops());
    dispatch(getScreens());
  }, []);
  return (
    <LinearGradient colors={["#23262F", "#333", "#999"]}>
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
          <>
            {listProducts.map((item, index) => {
              return (
                <View key={index} style={styles.listProduct}>
                  <NewScrollView products={item.obj} title={item.title} />
                </View>
              );
            })}
          </>
          <Spacer height="100" />
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
    fontSize: 18,
    alignSelf: "center",
    padding: 5,
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
