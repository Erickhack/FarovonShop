import React from "react";
import { WithProvider } from "./provider";
import { Navigations } from "../pages";
import "react-native-gesture-handler";

const App = () => {
  return (
    <>
      <Navigations />
    </>
  );
};

export default WithProvider(App);
