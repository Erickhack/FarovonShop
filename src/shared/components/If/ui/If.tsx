import React from "react";
import { View } from "react-native";

interface IProps {
  condition: boolean;
  children: React.ReactNode;
  anotherChildren?: React.ReactNode;
}

export const If: React.FC<IProps> = (props) => {
  return <>{props.condition ? props.children : props.anotherChildren}</>;
};
