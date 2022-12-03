import React, { useState, useEffect } from "react";
import {
  Keyboard,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ElementSP from "../../ElementSP";
import TextSeach from "../TextSearch";
import { searchResult } from "../../../../App/store/selector";
import { setInput } from "../../../../features/SearchBar";
import { getScreens } from "../../../../features/GetScreen";
import { getLaptops } from "../../../../features/GetLaptop";
import { removeAccents } from "../../../../App/configStr";
import { LAPTOPS, SCREENS, COLOR } from "../../../../App/store/selector";
import { setProducts } from "../../../../features/GetProducts";
import BtnDelete from "./btnDele";
import { styles } from "./style";

const specialName = [
  "laptop",
  "screen",
  "computer",
  "hàng công nghệ",
  "hàng công nghệ",
  "hàng công nghệ",
];
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("historySearch", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const SearchBar = (props) => {
  const textColor = useSelector(COLOR);
  const dispatch = useDispatch();
  const rootNav = useNavigation();
  const SearchInput = useSelector(searchResult);
  const [show, setShow] = useState(true);
  const [history, setHistory] = useState([]);
  const laptops = useSelector(LAPTOPS);
  const screens = useSelector(SCREENS);
  const [showSearch, setShowSearch] = useState([]);
  var allProducts = [...laptops, ...screens];
  useEffect(() => {
    dispatch(getLaptops());
    dispatch(getScreens());
    displayHistorySearch();
  }, []);
  const displayHistorySearch = async () => {
    const result = await AsyncStorage.getItem("historySearch");
    const resultSearch = await JSON.parse(result);
    if (resultSearch) {
      Object.keys(resultSearch).forEach((item) => {
        setHistory((prev) => [...prev, resultSearch[item]]);
      });
    }
  };
  const handleOnchange = (text) => {
    dispatch(setInput(text));
    if (text !== "") {
      const newData = allProducts.filter(function (item) {
        const itemData = removeAccents(item.name)
          ? removeAccents(item.name).toUpperCase()
          : "".toUpperCase();
        const textData = removeAccents(text).toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setShowSearch(newData);
      return newData;
    }
  };
  const handleClick = () => {
    if (SearchInput !== "") {
      setHistory((prev) => [...prev, SearchInput]);
      storeData(history.concat(SearchInput));
      dispatch(setProducts(handleOnchange(SearchInput)));
      rootNav.navigate("SearchProducts");
    }
  };
  const clearHistory = () => {
    setHistory([]);
    AsyncStorage.removeItem("historySearch");
  };
  const handleBack = () => {
    setShow(!show);
    Keyboard.dismiss();
  };
  const SearchText = (value) => {
    dispatch(setProducts(handleOnchange(value)));
    rootNav.navigate("SearchProducts");
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: textColor ? "#333" : "white" },
      ]}
    >
      <View>
        <Text
          style={[
            styles.header,
            { color: textColor ? "white" : "#333" },
            { display: show ? "flex" : "none" },
          ]}
        >
          {props.header}
        </Text>
      </View>
      <View style={styles.SearchBar}>
        <TouchableOpacity
          style={[styles.back, { display: !show ? "flex" : "none" }]}
          onPress={handleBack}
        >
          <Icon style={styles.Icon} name="angle-left" />
        </TouchableOpacity>
        <TextInput
          value={SearchInput}
          onFocus={() => setShow(false)}
          style={styles.TextInput}
          placeholder={props.placeholder}
          onChangeText={(text) => handleOnchange(text)}
        />
        <LinearGradient
          colors={["#23262F", "#999"]}
          style={styles.TouchableOpacity}
        >
          <TouchableOpacity onPress={handleClick}>
            <Icon style={styles.Icon} name="search" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <ScrollView style={show ? styles.noneSearchResult : styles.searchResult}>
        <View style={styles.result}>
          {SearchInput ? (
            Array.from(showSearch).map((product, index) => {
              if (index < 4) {
                return (
                  <ElementSP
                    key={product.id}
                    url={product.imgLink}
                    name={product.name}
                    price={product.price}
                  />
                );
              }
            })
          ) : (
            <></>
          )}
        </View>
        <View
          style={
            history.length != 0 ? styles.historySearch : { display: "none" }
          }
        >
          <Text style={styles.title}>Lịch sử tìm kiếm</Text>
          <View style={styles.content}>
            {[...new Set(history)].map((item, index) => {
              return (
                <TextSeach
                  key={index}
                  name={item}
                  callback={() => SearchText(item)}
                />
              );
            })}
          </View>
          <BtnDelete name="Xóa lịch sử tìm kiếm" callback={clearHistory} />
        </View>
        <View style={styles.preview}>
          <Text style={styles.title}>Đề xuất tìm kiếm</Text>
          <View style={styles.content}>
            {specialName.map((name, index) => {
              return (
                <TextSeach
                  key={index}
                  name={name}
                  callback={() => SearchText(name)}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchBar;
