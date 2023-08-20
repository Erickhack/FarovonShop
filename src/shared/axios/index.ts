import { AxiosRequestConfig } from "axios";
import instance from "./interceptors";

type DataType = "params" | "body";

export function post(
  url: string,
  data: any,
  typeData?: DataType,
  config?: AxiosRequestConfig
) {
  if (typeData === "params") {
    return instance({
      method: "POST",
      url,
      params: data,
      ...config,
    });
  }

  return instance({
    method: "POST",
    url,
    data,
    ...config,
  });
}

export function put(
  url: string,
  data?: any,
  typeData?: DataType,
  config?: AxiosRequestConfig
) {
  if (typeData === "params") {
    return instance({
      method: "PUT",
      url,
      params: data,
      ...config,
    });
  }

  return instance({
    method: "PUT",
    url,
    data,
    ...config,
  });
}

export function get(url: string, params: string, config: AxiosRequestConfig) {
  return instance({
    method: "GET",
    url,
    params,
    ...config,
  });
}

export function del(url: string, config: AxiosRequestConfig) {
  return instance.delete(url, config);
}
