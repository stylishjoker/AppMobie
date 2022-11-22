import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Product from "../Product";
import { SCREEN_WiDTH } from "../../../../App/ScreenDefault";

const NewScrollView = (props) => {
  const handleClick = () => {};
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text style={{ color: "#999", marginRight: 10 }}>Xem tất cả</Text>
          <Icon name="arrow-right" color={"#999"} />
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
                callback={handleClick}
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
    backgroundColor: "white",
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
