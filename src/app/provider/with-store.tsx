import { store } from "@app/store";
import React from "react";
import { Provider } from "react-redux";

export const WithStore = (component: () => React.ReactNode) => () => {
  return <Provider store={store}>{component()}</Provider>;
};
