import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RightArrow } from "../../../shared/assets";

interface IProps {
  children?: React.ReactNode;
}

export const HeaderNavigationContainer: React.FC<IProps> = (props) => {
  return (
    <View style={style.headerNavContain}>
      <View style={style.contain}>{props.children}</View>
    </View>
  );
};

const style = StyleSheet.create({
  headerNavContain: {
    backgroundColor: "white",
    height: 80,
    width: "100%",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#F3F3F3",
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: 16,
  },
});
