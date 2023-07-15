import React from "react";
import { H2 } from "../../../../shared/components/HeadingElements";
import { View, StyleSheet } from "react-native";

export const OrderHeader: React.FC = () => {
  return (
    <View style={style.contain}>
      <H2>Корзина товаров</H2>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    padding: 24,
    paddingRight: 0,
    paddingLeft: 0,
  },
});
