import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
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
import { LAPTOPS, SCREENS } from "../../../App/store/selector";
import { getLaptops } from "../../../features/GetLaptop";
import { getScreens } from "../../../features/GetScreen";
import ElementSP from "../ElementSP";
import BASE_URL from "../../../Api/config";
import Header from "../components/Header";

const SanPham = () => {
  const [selected, setSelected] = useState("Tất cả");
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const laptops = useSelector(LAPTOPS);
  const screens = useSelector(SCREENS);
  const listName = [laptops, screens];
  const allProducts = [];
  const GetAllProducts = async () => {
    const value = await listName.map((item) => item);
    const value1 = await value.map((item) => item);
  };
  const data = [
    {
      key: 1,
      value: "Tất cả",
    },
    {
      key: 2,
      value: "laptops",
    },
    {
      key: 3,
      value: "screens",
    },
    {
      key: 4,
      value: "computer",
    },
  ];
  useEffect(() => {
    dispatch(getLaptops());
    dispatch(getScreens());
    GetAllProducts(allProducts);
  }, []);
  useEffect(() => {
    switch (selected) {
      case "Tất cả":
        setProducts([]);
        break;
      case "laptops":
        setProducts(laptops);
        break;
      case "screens":
        setProducts(screens);
        break;
      case "computer":
        dispatch([]);
        break;
    }
  }, [selected]);
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
            {products.map((_element, index) => {
              return (
                <ElementSP
                  key={index}
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
