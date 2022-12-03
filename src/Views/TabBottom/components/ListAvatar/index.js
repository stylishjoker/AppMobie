import { View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";

import { styles, ListImg } from "./style";
import AvatarOption from "../AvatarOption";
import NewButton from "../../../../components/NewButton";
import { setAvatar } from "../../../../features/login";
import { AVATAR } from "../../../../App/store/selector";

const ListAvatar = (props) => {
  const dispatch = useDispatch();
  const avatar = useSelector(AVATAR);
  return (
    <Modal style={styles.container} isVisible={props.show}>
      <View style={styles.ViewModal}>
        <View style={styles.contentModal}>
          {ListImg.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => dispatch(setAvatar(item))}
                key={item}
                style={[
                  styles.avatar,
                  { borderWidth: item === avatar ? 2 : 0 },
                ]}
              >
                <AvatarOption check={avatar} linkImg={item} />
              </TouchableOpacity>
            );
          })}
        </View>
        <NewButton
          title="OK"
          callback={props.callback}
          bgColor="#E9373B"
          color="white"
        />
      </View>
    </Modal>
  );
};
export default ListAvatar;
