import { TouchableOpacity,Text,StyleSheet } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
const BtnDelete = (props) =>{
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={props.callback}
          >
            <Text>{props.name}</Text>
            <Icon name="trash" />
          </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        right: 5,
        top: 5,
        alignItems: "center",
        opacity: 0.4,
        backgroundColor: "red",
        padding :8,
    }
})
export default BtnDelete;