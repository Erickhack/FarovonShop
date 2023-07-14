import React from "react";
import { StyleSheet, View, TextInputProps } from "react-native";
import { If } from "../../../shared/components/If";
import { SvgProps } from "../../../shared/types";

interface IProps {
  icon?: (props: SvgProps) => JSX.Element;
  children?: React.ReactNode;
  borderd?: false;
  focused?: boolean;
}

const InputTextContainer: React.FC<IProps> = (props) => {
  const Icon = props?.icon ?? (() => <View></View>);

  return (
    <View
      style={{
        ...styles.container,
        borderColor: props.focused ? borderColorFocused : borderColor,
      }}
    >
      <View style={styles.ContainerIcon}>
        <If condition={props.icon !== undefined}>
          <Icon />
        </If>
      </View>
      <If condition={props.borderd === undefined}>
        <View
          style={{
            ...styles.border,
            borderColor: props.focused ? borderColorFocused : borderColor,
          }}
        />
      </If>
      <View style={styles.ContainerInput}>{props.children}</View>
    </View>
  );
};

const borderColor = "#4D6373";
const borderColorFocused = "#032E4D";

const styles = StyleSheet.create({
  border: {
    borderLeftWidth: 1,
  },
  ContainerInput: {
    flex: 1,
  },
  ContainerIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default InputTextContainer;
