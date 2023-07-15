import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { H2 } from "../../../../shared/components/HeadingElements";
import CheckBox from "@react-native-community/checkbox";

export const ProductFIlter: React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);

  return (
    <View style={style.contain}>
      <View>
        <H2>Категории товаров</H2>
      </View>
      <View style={style.filterContain}>
        <View style={style.filter}>
          <View style={style.checkbox}></View>
          <View style={style.filterContainText}>
            <Text>Все товары</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    gap: 24,
  },
  filterContain: {},
  filter: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  filterContainText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#A7ACB1",
    borderRadius: 8,
  },
});
