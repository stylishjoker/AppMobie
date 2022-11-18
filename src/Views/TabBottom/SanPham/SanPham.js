import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
} from "../../../App/ScreenDefault";
import ElementSP from "../ElementSP";
import BASE_URL from "../../../Api/config";
import Header from "../components/Header";

const SanPham = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("Tất cả");
  console.log(selected);
  const data = [
    {
      key: 1,
      value: "Tất cả",
    },
    {
      key: 2,
      value: "Bộ",
    },
    {
      key: 3,
      value: "Áo",
    },
    {
      key: 4,
      value: "Quần",
    },
  ];
  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}` + "/products",
    }).then((response) => setProducts(response.data));
  }, []);
  return (
    <SafeAreaView style={{ marginTop: STATUS_BAR_HEIGHT }}>
      <Header name="List sản phẩm" />
      <View style={styles.option}>
        <SelectList
          dropdownStyles={{ backgroundColor: "white" }}
          boxStyles={styles.SelectList}
          placeholder={selected}
          maxHeight={100}
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <ScrollView style={{ height: SCREEN_HEIGHT }}>
        <View style={styles.container}>
          {products.map((_element) => {
            return (
              <ElementSP
                key={_element.id}
                name={_element.name}
                price={_element.price}
                url={_element.imgLink}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#333",
    alignSelf: "center",
    fontWeight: "600",
  },
  option: {
    height: 60,
    width: "100%",
    zIndex: 100,
  },
  SelectList: {
    marginTop: 5,
    backgroundColor: "white",
  },
});

export default SanPham;
