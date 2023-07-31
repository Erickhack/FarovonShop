import React from "react";
import { View, StyleSheet, Text, ViewProps } from "react-native";

interface IProps extends ViewProps {
  children?: React.ReactNode;
}

export const InfoDocContain: React.FC<IProps> = (props) => {
  return (
    <View style={style.contain} {...props}>
      {props.children}
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    paddingHorizontal: 16,
    paddingVertical: 17,
    backgroundColor: "#F3F8FF",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
  },
});
