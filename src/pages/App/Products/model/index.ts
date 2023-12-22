import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitState {
  pending: {
    productFilter: boolean;
    products: boolean;
  };
  data: {
    products:
      | {
          // id: string | number;
          // img: string;
          // description: string;
          // value: number;
          // currency: string;

          id: number;
          images: {
            id: number;
            path: string;
            type: string;
          }[];
          shortDescription: string;
        }[]
      | null;
    productFilter:
      | {
          id: number | string;
          title: string;
          filters: {
            id: string | number;
            name: string;
            value: any;
          }[];
        }[]
      | null;
  };
  orders: {
    img: string;
    description: string;
    value: number;
    currency: string;
  }[];
}

const initialState: IInitState = {
  pending: {
    productFilter: false,
    products: false,
  },
  data: {
    productFilter: null,
    products: null,
  },
  orders: [],
};

const ProductSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    startPending(state, action: PayloadAction<keyof IInitState["pending"]>) {
      state.pending[action.payload] = true;
    },
    stopPending(state, action: PayloadAction<keyof IInitState["pending"]>) {
      state.pending[action.payload] = true;
    },
    setData(
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: keyof IInitState["data"]; value: any }>
    ) {
      state.data = { ...state.data, [key]: value };
    },
  },
});

export const ProductAction = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;
