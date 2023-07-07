import React from "react";
import { Text, View } from "react-native";

interface IProps {
  children?: React.ReactNode;
}

export const LoginTitle: React.FC<IProps> = (props) => {
  return (
    <View>
      <View></View>
      <View>
        <Text>Teest</Text>
        <Text></Text>
      </View>
    </View>
  );
};
