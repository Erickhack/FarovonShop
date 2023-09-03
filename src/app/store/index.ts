import { configureStore } from "@reduxjs/toolkit";
import { LoginReducer as Login } from "../../pages/Auth/LogIn";
import { ProductReducer as Products } from "../../pages/App/Products";

export const store = configureStore({
  reducer: {
    Login,
    Products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
