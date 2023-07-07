import { LoginTitle } from "../../../../widgets";
import React from "react";
import { View, Text } from "react-native";
import { LoginForm } from "../../../../widgets/Login/Form";

const LogIn = () => {
  return (
    <View>
      <LoginTitle></LoginTitle>
      <LoginForm></LoginForm>
    </View>
  );
};

export default LogIn;
