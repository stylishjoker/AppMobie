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
import { useSelector, useDispatch } from "react-redux";

import { setInput } from "../../../features/SearchBar";
import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
} from "../../../App/ScreenDefault";
import SearchBar from "../components/Searchbar";
import Slider from "../components/Sider";

const TrangChu = () => {
  const SearchInput = useSelector((state) => state.SearchResult.input);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <SearchBar
              placeholder="Nhập thông tin sản phẩm"
              value={SearchInput}
              callback={(text) => {
                dispatch(setInput(text));
              }}
            />
          </View>
          <View style={styles.slider}>
            <Slider />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT,
    display: "flex",
    flexDirection: "column",
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
    width: "80%",
  },
});
export default TrangChu;
