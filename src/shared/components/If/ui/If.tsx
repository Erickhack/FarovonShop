import React from "react";
import { View } from "react-native";

interface IProps {
  condition: boolean;
  children: React.ReactNode;
  anotherChildren?: React.ReactNode;
}

export const If: React.FC<IProps> = (props) => {
  props.anotherChildren = props?.anotherChildren ?? null;
  return <>{props.condition ? props.children : props.anotherChildren}</>;
};
