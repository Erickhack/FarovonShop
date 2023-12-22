import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const token = AsyncStorage.getItem("FP_Token").then((data) => data || "");

const instance = axios.create({
  baseURL: "https://demo.sylius.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
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
