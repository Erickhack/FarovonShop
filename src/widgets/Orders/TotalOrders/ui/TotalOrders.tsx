import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HorizontalViewer } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";

export const TotalOrders = () => {
  return (
    <View style={style.TotalOrders}>
      <View style={style.container}>
        <View style={style.total}>
          <View style={style.information}>
            <View>
              <HorizontalViewer
                default={{
                  information: "45 кг.",
                  title: "Вес",
                }}
              />
            </View>
            <View>
              <HorizontalViewer
                default={{
                  information: "30 с",
                  title: "Доставка",
                }}
              />
            </View>
            <View>
              <HorizontalViewer
                default={{
                  information: "500 с",
                  title: "Скидка",
                }}
              />
            </View>
          </View>
          <View style={style.border}></View>
          <View>
            <HorizontalViewer
              children={
                <View style={style.customViewerContain}>
                  <View>
                    <Text style={style.customViewerTitle}>Тотал</Text>
                  </View>
                  <View>
                    <H2>2372 с.</H2>
                  </View>
                </View>
              }
            />
          </View>
        </View>
        <View style={style.action}></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  TotalOrders: {},
  container: {},
  total: {
    display: "flex",
    gap: 16,
  },
  action: {},
  border: {
    height: 1,
    width: "100%",
    borderTopWidth: 1,
  },
  customViewerContain: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  customViewerTitle: {
    color: "#545454",
    fontSize: 14,
    fontWeight: "500",
  },
  information: {
    display: "flex",
    gap: 12,
  },
});
