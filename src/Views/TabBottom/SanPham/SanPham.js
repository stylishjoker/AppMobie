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
  SCREEN_HEIGHT,
} from "../../../App/ScreenDefault";
import { LAPTOPS, SCREENS, BACK_GROUND } from "../../../App/store/selector";
import { getLaptops } from "../../../features/GetLaptop";
import { getScreens } from "../../../features/GetScreen";
import ElementSP from "../ElementSP";
import Header from "../components/Header";
import Spacer from "../../../components/Spacer";

const SanPham = () => {
  const [selected, setSelected] = useState("Tất cả");
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const laptops = useSelector(LAPTOPS);
  const screens = useSelector(SCREENS);
  const backgroundColor = useSelector(BACK_GROUND);
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
  }, []);
  const selectProduct = () => {
    var newData;
    switch (selected) {
      case "Tất cả":
        newData = [...laptops, ...screens];
        break;
      case "laptops":
        newData = laptops;
        break;
      case "screens":
        newData = screens;
        break;
      case "computer":
        newData = screens;
        break;
    }
    return newData;
  };
  useEffect(() => {
    setProducts(selectProduct());
  }, [selected]);
  const onChangeText = (text) => {
    setSearch(text);
    if (text) {
      const newData = products.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData);
      setProducts(newData);
    } else {
      setProducts(selectProduct());
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor ? "#555" : "white",
        height: SCREEN_HEIGHT,
      }}
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
        <TextInput
          style={styles.TextInput}
          value={search}
          onChangeText={onChangeText}
          placeholder="Nhập tên sản phẩm"
        />
      </View>
      <View style={{ height: WINDOW_HEIGHT, width: SCREEN_WiDTH }}>
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
