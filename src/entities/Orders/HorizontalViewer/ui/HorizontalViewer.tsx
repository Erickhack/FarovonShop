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
            <Text style={style.titile}>{props.default?.title}</Text>
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
  titile: {
    color: "#545454",
    fontSize: 14,
    fontWeight: "500",
  },
  information: {
    fontWeight: "500",
  },
});

// color: #545454;
// font-family: Inter;
// font-size: 14px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
