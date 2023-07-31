import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { If } from "../../../../shared/components/If";

interface IProps {
  children?: React.ReactNode;
  focueView?: React.ReactNode;
}

export const ClientViewerContain: React.FC<IProps> = (props) => {
  return (
    <View
      style={{
        ...style.clientViewerContain,
      }}
    >
      <View style={style.contain}>
        <View style={style.main}>{props.children}</View>
        <View>
          <If condition={props.focueView !== undefined}>{props.focueView}</If>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  clientViewerContain: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  contain: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    display: "flex",
    gap: 12,
  },
});
