import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { If } from "../../../../shared/components/If";

interface IProps {
  children?: React.ReactNode;
  default?: {
    title?: string;
    information?: string;
  };
}

export const HorizontalViewer: React.FC<IProps> = (props) => {
  return (
    <View>
      <If
        condition={props.default !== undefined}
        anotherChildren={props.children}
      >
        <View style={style.container}>
          <View>
            <Text>{props.default?.title}</Text>
          </View>
          <View>
            <Text style={style.information}>{props.default?.information}</Text>
          </View>
        </View>
      </If>
    </View>
  );
};

const style = StyleSheet.create({
  horizontalViewer: {},
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titile: {},
  information: {
    fontWeight: "500",
  },
});
