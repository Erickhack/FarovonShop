import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

export const ProductFilterList: React.FC = () => {
  return (
    <View>
      <ScrollView
        style={style.scroll}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={style.scrollContain}>
          <View
            style={{ ...style.filterContain, ...style.filterContainPicked }}
          >
            <Text style={{ ...style.filterText, ...style.filterTextPicked }}>
              Все товары
            </Text>
          </View>
          <View style={style.filterContain}>
            <Text style={style.filterText}>Сладости</Text>
          </View>
          <View style={style.filterContain}>
            <Text style={style.filterText}>Фрукты</Text>
          </View>
          <View style={style.filterContain}>
            <Text style={style.filterText}>Мясное</Text>
          </View>
          <View style={style.filterContain}>
            <Text style={style.filterText}>Море продукты</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    flex: 1,
  },
  scroll: {
    display: "flex",
    gap: 8,
  },
  filterContain: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  filterContainPicked: {
    backgroundColor: "#032E4D",
  },
  filterTextPicked: {
    color: "#FFFFFF",
  },
  filterText: {
    color: "#3D3D3D",
  },
  scrollContain: {
    display: "flex",
    gap: 8,
    flexDirection: "row",
  },
});
