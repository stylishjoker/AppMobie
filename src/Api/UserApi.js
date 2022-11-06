import axios from "axios";
import BASE_URL from "./config";

const ApiManger = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  withCredentials: true,
});
export default ApiManger;
