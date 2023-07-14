import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export const HeadDesc: React.FC<IProps> = (props) => {
  return (
    <View>
      <View style={style.titleContain}>
        <Text style={style.title}>{props.title}</Text>
      </View>
      <View style={style.desContain}>
        <Text style={style.desc}>{props.children}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  titleContain: {
    marginBottom: 6,
  },
  title: {
    color: "#031627",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
  desc: {
    color: "#031627",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: undefined,
  },
  desContain: {
    marginTop: 6,
  },
});
