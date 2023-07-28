import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { If } from "../../../../shared/components/If";

interface IProps {
  children?: React.ReactNode;
  focused: boolean;
  focueView?: React.ReactNode;
}

export const SelectClientContain: React.FC<IProps> = (props) => {
  return (
    <View
      style={{
        ...style.selectClientContain,
        ...(props.focused && {
          borderWidth: 2,
        }),
      }}
    >
      <View style={style.contain}>
        <View style={style.main}>{props.children}</View>
        <View style={style.focused}>
          <If condition={props.focused}>{props.focueView}</If>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  selectClientContain: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#032E4D",
  },
  contain: {
    padding: 16,
  },
  focused: {},
  main: {
    display: "flex",
    gap: 12,
  },
});
