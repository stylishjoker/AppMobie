import { View, Text } from "react-native";

import ElementSP from "./ElementSP";
import WrapperSP from "./WrapperSP";
const props = [
  {
    name: "LOL",
    price: "100000",
    url: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    name: "LOL",
    price: "100000",
    url: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    name: "LOL",
    price: "100000",
    url: "https://reactnative.dev/img/tiny_logo.png",
  },
];
const SanPham = () => {
  return (
    <View>
      <Text>SanPham</Text>
      <WrapperSP>
        {props.map((_element) => {
          return (
            <ElementSP
              name={_element.name}
              price={_element.price}
              url={_element.url}
            />
          );
        })}
      </WrapperSP>

      <Text>SanPham</Text>
    </View>
  );
};
export default SanPham;
