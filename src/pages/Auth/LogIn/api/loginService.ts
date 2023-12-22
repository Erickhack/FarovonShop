import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginAPIS } from ".";
import { AppDispatch } from "../../../../app/store";
import { LoginActionReducer } from "../model";

const login =
  (loginData: { email: string; password: string }, callback: () => void) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(LoginActionReducer.startPending());
      console.log(loginData);
      const { data } = await LoginAPIS.login(loginData);

      await AsyncStorage.setItem("FP_Token", JSON.stringify(data));
      callback();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(LoginActionReducer.stopPending());
    }
  };

export const loginService = { login };
