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
      <View>
        <OrderList />
      </View>
      <View>
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
  },
});
