import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import { OrderHeader, OrderList, TotalOrders } from "../../../../widgets";

interface IProps {}

const Orders: React.FC<IProps> = (props) => {
  return (
    <View style={style.contain}>
      <View>
        <OrderHeader />
      </View>
      <View style={style.main}>
        <OrderList />
      </View>
      <View style={style.footer}>
        <TotalOrders />
      </View>
    </View>
  );
};

export default Orders;

const style = StyleSheet.create({
  contain: {
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: "100%",
  },
  footer: {},
  main: {
    flex: 1,
  },
});
