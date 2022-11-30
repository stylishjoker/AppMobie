import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SCREEN_WiDTH, SCREEN_HEIGHT } from "../../../../App/ScreenDefault";
import ElementSP from "../../ElementSP";
import TextSeach from "../TextSearch";
import { searchResult } from "../../../../App/store/selector";
import { setInput } from "../../../../features/SearchBar";
import { getScreens } from "../../../../features/GetScreen";
import { getLaptops } from "../../../../features/GetLaptop";
import { removeAccents } from "../../../../App/configStr";
import { LAPTOPS, SCREENS } from "../../../../App/store/selector";
import { setProducts } from "../../../../features/GetProducts";
import NewButton from "../../../../components/NewButton";
import BtnDelete from "./btnDele";

const specialName = [
  "laptops",
  "screens",
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
    if (text) {
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
    if (searchResult) {
      setHistory((prev) => [...prev, SearchInput]);
      storeData(history.concat(SearchInput));
      rootNav.navigate("SearchProducts");
    }
    dispatch(setProducts(handleOnchange(SearchInput)));
  };
  const clearHistory = () => {
    setHistory([]);
    AsyncStorage.removeItem("historySearch");
  };
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
        // onBlur={() => setShow(true)}
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
          <Text style={styles.Text}>Search</Text>
        </TouchableOpacity>
      </LinearGradient>
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
              return <TextSeach key={index} name={item} />;
            })}
          </View>
          <BtnDelete name="xoa lich su tim kiem" callback={clearHistory}/>
        </View>
        <View style={styles.preview}>
          <Text style={styles.title}>Đề xuất tìm kiếm</Text>
          <View style={styles.content}>
            {specialName.map((name, index) => {
              return <TextSeach key={index} name={name} />;
            })}
          </View>
        </View>
      </ScrollView>
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
    borderColor: "#999",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  Text: {
    fontWeight: "600",
    color: "white",
  },
  searchResult: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WiDTH,
    display: "flex",
    flexDirection: "column",
    left: 0,
    backgroundColor: "white",
  },
  noneSearchResult: {
    display: "none",
  },
  historySearch: {},
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
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
    backgroundColor: "red",
    padding :8,
  },
});
export default SearchBar;
