import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SCREEN_WiDTH } from "../../../../App/ScreenDefault";
import BASE_URL from "../../../../Api/config";
import ElementSP from "../../ElementSP";
import TextSeach from "../TextSearch";
import { searchResult } from "../../../../App/store/selector";
import { setInput } from "../../../../features/SearchBar";

const specialName = [
  "hàng xách tay",
  "hàng đặc biệt",
  "hàng công nghệ",
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
  const SearchInput = useSelector(searchResult);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [history, setHistory] = useState([]);
  const [products, setProducts] = useState(null);
  const [showSearch, setShowSearch] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BASE_URL}` + "/products",
    }).then((response) => setProducts(response.data));

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
  };
  const handleClick = () => {
    setHistory((prev) => [...prev, SearchInput]);
    storeData(history.concat(SearchInput));
  };
  const clearHistory = () => {
    setHistory([]);
    AsyncStorage.removeItem("historySearch");
  };
  console.log(products);
  return (
    <View style={styles.container}>
      <View style={styles.ImageBar}>
        <Image
          style={styles.Image}
          source={require("../../../../assets/Icon/search.png")}
          resizeMode="stretch"
        />
      </View>
      <TextInput
        value={SearchInput}
        onBlur={() => setShow(true)}
        onFocus={() => setShow(false)}
        style={styles.TextInput}
        placeholder={props.placeholder}
        onChangeText={handleOnchange}
      />
      <LinearGradient
        colors={["#f857a6", "#ff5858"]}
        style={styles.TouchableOpacity}
      >
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.Text}>Search</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={show ? styles.noneSearchResult : styles.searchResult}>
        {/* <View style={styles.result}>
          {products ? (
            Array.from(products).map((product, index) => {
              if (index < 3) {
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
        </View> */}
        <View
          style={
            history.length != 0 ? styles.historySearch : { display: "none" }
          }
        >
          <Text style={styles.title}>Lịch sử tìm kiếm</Text>
          <View style={styles.content}>
            {[...new Set(history)].map((item, index) => {
              return <TextSeach key={index} name={item} />;
            })}
          </View>
          <TouchableOpacity style={styles.clearHistory} onPress={clearHistory}>
            <Text>Xóa lịch sử tìm kiếm</Text>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../../../../assets/Icon/delete.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.preview}>
          <Text style={styles.title}>Đề xuất tìm kiếm</Text>
          <View style={styles.content}>
            {specialName.map((name, index) => {
              return <TextSeach key={index} name={name} />;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingRight: 3,
    paddingLeft: 5,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#F7C6C9",
  },
  TextInput: {
    flex: 5,
    height: 40,
    margin: 12,
    borderWidth: 0,
  },
  Image: {
    width: 30,
    height: 30,
  },
  TouchableOpacity: {
    flex: 2,
    height: 40,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 50,
    right: 0,
  },
  ImageBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  Text: {
    lineHeight: 40,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: "white",
  },
  searchResult: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    height: 400,
    width: SCREEN_WiDTH,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    left: 0,
  },
  noneSearchResult: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    height: 400,
    width: SCREEN_WiDTH,
    display: "none",
  },
  historySearch: {},
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    borderTopColor: "#999",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  clearHistory: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    right: 5,
    top: 5,
    alignItems: "center",
    opacity: 0.4,
  },
});
export default SearchBar;
