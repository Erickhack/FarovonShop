import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  pending: boolean;
  data: {
    
  };
  orders: {
    img: string;
    description: string;
    value: number;
    currency: string;
  }[];
}

const initialState = {
  pending: false,
};

// const ProductSlice = createSlice({
//   name: "product",
// });
