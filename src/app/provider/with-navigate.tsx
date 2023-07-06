import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

export const WithNavigate = (component: () => React.ReactNode) => () => {
  console.log("Test");

  return <NavigationContainer>{component()}</NavigationContainer>;
};
