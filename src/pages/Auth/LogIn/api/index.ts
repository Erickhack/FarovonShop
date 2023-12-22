import { post } from "../../../../shared/axios";

export enum APIPaths {
  login = "/v2/shop/authentication-token",
}

const login = (loginData: { email: string; password: string }) =>
  post(APIPaths.login, loginData);

export const LoginAPIS = {
  login,
};
