import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  children?: React.ReactNode;
}

export const H1: React.FC<IProps> = (props) => {
  return (
    <View>
      <Text style={style.text}>{props.children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: "#031627",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
});
