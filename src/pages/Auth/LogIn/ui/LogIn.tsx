import { LoginTitle, LoginForm } from "../../../../widgets";
import React from "react";
import { View, StyleSheet } from "react-native";

interface IProps {}

const LogIn: React.FC<IProps> = (props) => {
  console.log(props);

  return (
    <View style={style.container}>
      <LoginTitle />
      <LoginForm />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 16,
    display: "flex",
    gap: 24,
    justifyContent: "center",
  },
});

export default LogIn;
