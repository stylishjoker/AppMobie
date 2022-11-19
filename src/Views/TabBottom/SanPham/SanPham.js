import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
  SCREEN_WiDTH,
} from "../../../App/ScreenDefault";
import ElementSP from "../ElementSP";
import BASE_URL from "../../../Api/config";
import Header from "../components/Header";

const SanPham = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("Tất cả");
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
          dropdownStyles={styles.dropdownStyles}
          search={false}
          boxStyles={styles.SelectList}
          placeholder={selected}
          maxHeight={100}
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
        <TextInput style={styles.TextInput} placeholder="Nhập tên sản phẩm" />
      </View>
      <View style={{ height: WINDOW_HEIGHT - 190, width: SCREEN_WiDTH }}>
        <ScrollView style={styles.ScrollView} pagingEnabled>
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
      </View>
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
    padding: 10,
    height: 60,
    width: "100%",
    zIndex: 100,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 5,
  },
  SelectList: {
    backgroundColor: "white",
    height: 40,
  },
  dropdownStyles: {
    height: 300,
    backgroundColor: "white",
  },
  TextInput: {
    flex: 1,
    borderColor: "#999",
    borderWidth: 1,
    height: 40,
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: 10,
    padding: 5,
  },
  ScrollView: {
    height: WINDOW_HEIGHT,
  },
});

export default SanPham;
