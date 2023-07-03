import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

export const WithNavigate = (component: () => React.ReactNode) => () => {
  return <NavigationContainer>{component()}</NavigationContainer>;
};
