import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const token = AsyncStorage.getItem("FP_Token");

const instance = axios.create({
  baseURL: "http://127.0.0.1:9999",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    switch (response.status) {
      case 200:
        return response;

      case 401:
        return response;

      default:
        return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
