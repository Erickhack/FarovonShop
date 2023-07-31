import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { DocsInfoList } from "../../../../features/Docs";
import { H2 } from "../../../../shared/components/HeadingElements";

const DocInfoNames = [
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
  "Документ 23562",
];

export const DocList = () => {
  return (
    <View style={style.contain}>
      <View>
        <H2>Последние документы</H2>
      </View>
      <ScrollView>
        <DocsInfoList DocsInfoNames={DocInfoNames} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    gap: 20,
  },
});
