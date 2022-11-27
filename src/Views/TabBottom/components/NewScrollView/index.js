import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import Product from "../Product";
import { SCREEN_WiDTH } from "../../../../App/ScreenDefault";
import {
  COLOR,
  BACK_GROUND,
  INFO_PRODUCTS,
} from "../../../../App/store/selector";
import { setInfoProduct } from "../../../../features/GetProducts";

const NewScrollView = (props) => {
  const rootNav = useNavigation();
  const dispatch = useDispatch();
  const textColor = useSelector(COLOR);
  const backgroundColor = useSelector(BACK_GROUND);
  const infoProduct = useSelector(INFO_PRODUCTS);
  const HandleClick = (item) => {
    dispatch(setInfoProduct(item));
    rootNav.navigate("InfoProduct");
  };
  return (
    <View>
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor ? "#999" : "white",
            borderColor: backgroundColor ? "none" : "#999",
            borderWidth: backgroundColor ? 0 : 1,
          },
        ]}
      >
        <Text style={[styles.title, { color: textColor ? "white" : "#333" }]}>
          {props.title}
        </Text>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={{ color: textColor ? "white" : "#333", marginRight: 10 }}
          >
            Xem tất cả
          </Text>
          <Icon name="arrow-right" color={textColor ? "white" : "#333"} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.content}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {props.products ? (
          Array.from(props.products).map((product) => {
            return (
              <Product
                callback={() => HandleClick(product)}
                key={product.id}
                name={product.name}
                price={product.price}
                imgLink={product.imgLink}
              />
            );
          })
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WiDTH,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
    textTransform: "uppercase",
  },
  TouchableOpacity: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {},
});
export default NewScrollView;
