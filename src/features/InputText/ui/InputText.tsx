import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface IProps extends TextInputProps {}

export const InputText: React.FC<IProps> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    flex: 1,
    outlineWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
  },
});
