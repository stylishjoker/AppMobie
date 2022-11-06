import ApiManger from "./UserApi";

export const user_login = async (data) => {
  try {
    const result = await ApiManger("/user", {
      method: "POST",
      headers: {
        "content-type": "appllication/api",
      },
      data: data,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
