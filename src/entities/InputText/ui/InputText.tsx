import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TextInputProps,
} from "react-native";
import { If } from "../../../shared/components/If";

interface IProps extends TextInputProps {
  icon?: () => JSX.Element;
}

const InputText: React.FC<IProps> = (props) => {
  const Icon = props?.icon ?? (() => <View></View>);

  return (
    <View style={styles.container}>
      <View style={styles.ContainerIcon}>
        <If condition={props.icon !== undefined}>
          <Icon />
        </If>
      </View>
      <View style={styles.border} />
      <View style={styles.ContainerInput}>
        <TextInput style={styles.input} {...props} />
      </View>
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
  input: {
    padding: 10,
    flex: 1,
    outlineWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
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

export default InputText;
// border-radius: 5px;
// border: 1px solid #4D6373;
// background: #FFF;
