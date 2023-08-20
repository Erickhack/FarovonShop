import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitState {
  pending: boolean;
}

const initialState: IInitState = {
  pending: false,
};

const LoginSlice = createSlice({
  initialState,
  name: "auth/login",
  reducers: {
    startPending(store) {
      store.pending = true;
    },
    stopPending(store) {
      store.pending = false;
    },
  },
});

export const LoginReducer = LoginSlice.reducer;
export const LoginActionReducer = LoginSlice.actions;
