import { post } from "../../../../shared/axios";

export enum APIPaths {
  login = "/auth/login",
}

const login = (loginData: { user: string; password: string }) =>
  post(APIPaths.login, loginData);

export const LoginAPIS = {
  login,
};
