import {
  DrawerNavigationEventMap,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import {
  DrawerNavigationState,
  ParamListBase,
  RouteConfig,
} from "@react-navigation/native";
import React from "react";

interface IProps {
  DrawerScreen: <RouteName extends string>(
    _: RouteConfig<
      ParamListBase,
      RouteName,
      DrawerNavigationState<ParamListBase>,
      DrawerNavigationOptions,
      DrawerNavigationEventMap
    >
  ) => null;
  component: (props: any) => JSX.Element;
}

export const NavigatorController: React.FC<IProps> = (props) => {
  return <props.DrawerScreen name="Auth" component={props.component} />;
};
