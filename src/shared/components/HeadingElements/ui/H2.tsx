import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  children?: React.ReactNode;
}

export const H2: React.FC<IProps> = (props) => {
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
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: undefined,
  },
});
