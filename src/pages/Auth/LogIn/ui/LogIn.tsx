import React from "react";
import { View, StyleSheet } from "react-native";
import { LoginForm, LoginTitle } from "../../../../widgets";
import { ParamListBase } from "@react-navigation/native";
import { loginService } from "../api/loginService";
import { useAppDispatch } from "../../../../shared/hooks";

interface IProps {
  [name: string]: any;
}

const LogIn: React.FC<IProps> = (props) => {
  React.useEffect(() => {}, []);
  const dispatch = useAppDispatch();

  const handleOnPress = (values: any) => {
    dispatch(
      loginService.login(values, () => {
        props.drawProps.navigation.navigate("App");
      })
    );
  };

  return (
    <View style={style.container}>
      <LoginTitle />
      <LoginForm onPress={handleOnPress} />
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
