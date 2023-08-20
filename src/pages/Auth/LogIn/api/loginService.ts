import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginAPIS } from ".";
import { AppDispatch } from "../../../../app/store";
import { LoginActionReducer } from "../model";

const login =
  (loginData: { user: string; password: string }, callback: () => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(LoginActionReducer.startPending);
      const token = await LoginAPIS.login(loginData);
      await AsyncStorage.setItem("FP_Token", JSON.stringify(token));
      callback();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(LoginActionReducer.stopPending);
    }
  };

export const loginService = { login };
