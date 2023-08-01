import React from "react";
import { View, StyleSheet, Button } from "react-native";

interface IProps {
  onPress: () => void;
}

export const UserLogOutBtn: React.FC<IProps> = (props) => {
  return (
    <View style={style.containerBtn}>
      <Button
        title="Выход с аккаунта"
        color="#F1F1F1"
        onPress={props.onPress}
        
      />
    </View>
  );
};

const style = StyleSheet.create({
  containerBtn: {},
});
