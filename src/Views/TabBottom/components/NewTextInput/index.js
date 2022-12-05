import { TextInput, View, Text } from "react-native";

import { styles } from "./style";

const NewTextInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{props.name}</Text>
      <TextInput
        value={props.value}
        onChangeText={(text) => props.callback(text)}
        style={styles.TextInput}
        editable={props.check}
        keyboardType={props.type}
      />
    </View>
  );
};

export default NewTextInput;
