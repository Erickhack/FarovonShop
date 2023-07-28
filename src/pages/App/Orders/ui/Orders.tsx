import React from "react";
import { View, StyleSheet, Platform, StatusBar, Pressable } from "react-native";
import { OrderHeader, OrderList, TotalOrders } from "../../../../widgets";
import { Button } from "react-native";

interface IProps {
  navigation: any;
}

const Orders: React.FC<IProps> = (props) => {
  const handlePress = () => {
    props.navigation.navigate("StackOrdersSelectClient");
  };

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
        <View>
          <Button title="Продолжить" color="#032E4D" onPress={handlePress} />
        </View>
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
  footer: {
    display: "flex",
    gap: 24,
  },
  main: {
    flex: 1,
  },
  containerBtn: {},
});
