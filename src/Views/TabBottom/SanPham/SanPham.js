import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import {
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
  SCREEN_WiDTH,
} from "../../../App/ScreenDefault";
import {
  LAPTOPS,
  SCREENS,
  BACK_GROUND,
  COLOR,
} from "../../../App/store/selector";
import { getLaptops } from "../../../features/GetLaptop";
import { getScreens } from "../../../features/GetScreen";
import ElementSP from "../ElementSP";
import Header from "../components/Header";
import Spacer from "../../../components/Spacer";

const SanPham = () => {
  const [selected, setSelected] = useState("Tất cả");
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const laptops = useSelector(LAPTOPS);
  const screens = useSelector(SCREENS);
  const textColor = useSelector(COLOR);
  const backgroundColor = useSelector(BACK_GROUND);
  var allProducts = [];
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
    allProducts = [...laptops, ...screens];
  }, []);
  useEffect(() => {
    switch (selected) {
      case "Tất cả":
        setProducts(allProducts);
        break;
      case "laptops":
        setProducts(laptops);
        break;
      case "screens":
        setProducts(screens);
        break;
      case "computer":
        setProducts(screens);
        break;
    }
  }, [selected]);
  return (
    <SafeAreaView
      style={{ backgroundColor: backgroundColor ? "#555" : "white" }}
    >
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
          <Spacer height="80" />
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
