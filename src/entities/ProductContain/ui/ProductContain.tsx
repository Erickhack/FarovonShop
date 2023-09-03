import React from "react";
import { View, StyleSheet } from "react-native";

interface IProps {
  key?: string;
  children?: React.ReactNode;
  productImage: React.ReactNode;
}

export const ProductContain: React.FC<IProps> = (props) => {
  return (
    <View style={style.productContain} key={props.key}>
      <View style={style.contain}>
        <View style={style.imgaeContain}>{props.productImage}</View>

        <View style={style.childContain}>{props.children}</View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    height: 130,
  },
  productContain: {
    borderRadius: 5,
    borderColor: "#F6F6F6",
    borderWidth: 1,
    flex: 1,
    overflow: "hidden",
  },
  imgaeContain: {
    display: "flex",
    width: 140,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  childContain: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
    justifyContent: "space-between",
  },
});
