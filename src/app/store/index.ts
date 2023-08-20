import { configureStore } from "@reduxjs/toolkit";
import { LoginReducer as Login } from "../../pages/Auth/LogIn";

export const store = configureStore({
  reducer: {
    Login,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
