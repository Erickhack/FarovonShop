import React from "react";
import { StyleSheet, View, TextInputProps } from "react-native";
import { If } from "../../../shared/components/If";

interface IProps extends TextInputProps {
  icon?: () => JSX.Element;
  children?: React.ReactNode;
}

const InputTextContainer: React.FC<IProps> = (props) => {
  const Icon = props?.icon ?? (() => <View></View>);

  return (
    <View style={styles.container}>
      <View style={styles.ContainerIcon}>
        <If condition={props.icon !== undefined}>
          <Icon />
        </If>
      </View>
      <View style={styles.border} />
      <View style={styles.ContainerInput}>{props.children}</View>
    </View>
  );
};

const borderColor = "#4D6373";

const styles = StyleSheet.create({
  border: {
    borderLeftWidth: 1,
    borderColor: borderColor,
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
    borderColor: borderColor,
  },
});

export default InputTextContainer;
