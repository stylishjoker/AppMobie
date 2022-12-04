import { StyleSheet, StatusBar } from "react-native";

import { SCREEN_HEIGHT } from "../../App/ScreenDefault";

const CHECK_EMAIL =
  "[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com|hotmail.com|yahoo.com)";
const FORMAT = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
export const ValidateObj = {
  CheckEmail: (text) => {
    var email = "";
    if (text === "") {
      email = "Bạn chưa nhập thông tin này";
    } else if (text !== "") {
      const patt = new RegExp(CHECK_EMAIL);
      const check = patt.test(text);
      if (!check) {
        email = "Email không hợp lệ ";
      }
    }
    return email;
  },
  CheckAccount: (text) => {
    var account = "";
    if (text === "") {
      account = "Bạn chưa nhập thông tin này";
    } else if (text !== "") {
      const patt = new RegExp(FORMAT);
      const check = patt.test(text);
      if (check) {
        account = "Tài khoản không được chứa ký tự đặc biệt ";
      } else if (text.indexOf(" ") >= 0) {
        account = "Tài khoản không được có khoảng trống ";
      }
    }
    return account;
  },
  checkPassword: (text) => {
    var password = "";
    if (text.length < 6) {
      password = "Mật khẩu không được dưới 6 ký tự";
    } else if (text === "") {
      password = "Bạn chưa nhập thông tin này";
    } else if (text !== "") {
      const patt = new RegExp(FORMAT);
      const check = patt.test(text);
      if (check) {
        password = "Mật khẩu không được chứa ký tự đặc biệt ";
      } else if (text.indexOf(" ") >= 0) {
        password = "Mật khẩu không được có khoảng trống ";
      }
    }
    return password;
  },
  checkFullName: (text) => {
    var fullName = "";
    if (text === "") {
      fullName = "Bạn chưa nhập thông tin này";
    } else if (text !== "") {
      const patt = new RegExp(FORMAT);
      const check = patt.test(text);
      if (check) {
        fullName = "Tài khoản không được chứa ký tự đặc biệt ";
      }
    }
    return fullName;
  },
  checkNumberPhone: (text) => {
    var numberPhone = "";
    if (text === "") {
      numberPhone = "Bạn chưa nhập thông tin này";
    }
    return numberPhone;
  },
};
export const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: "white",
  },
  title: {
    color: "#FF005B",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
  back: {
    marginTop: StatusBar.currentHeight,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    left: 10,
  },
  TextInput: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    color: "#999",
    alignSelf: "center",
  },
  formGroup: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  Number: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    height: 40,
    flex: 2,
  },
  avatar: {
    flex: 1,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#999",
    marginLeft: 6,
    borderRadius: 25,
  },
  Text: {
    color: "white",
    fontWeight: "500",
  },
  error: {
    color: "red",
    width: "90%",
    alignSelf: "center",
    margin: 5,
  },
});
