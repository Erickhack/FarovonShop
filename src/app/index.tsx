import React from "react";
import { WithProvider } from "./provider";
import Navigations from "../pages";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <>
      <Navigations />
    </>
  );
};

export default WithProvider(App);
