import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  contain: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#F3F3F3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});
