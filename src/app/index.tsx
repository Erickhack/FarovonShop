import React from "react";
import { WithProvider } from "./provider";
import Navigations from "../pages";

const App = () => {
  return (
    <>
      <Navigations />
    </>
  );
};

export default WithProvider(App);
