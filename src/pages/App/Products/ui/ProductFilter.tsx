import React from "react";
import { View } from "react-native";
import { ProductFIlter } from "../../../../widgets";

interface IProps {
  children?: React.ReactNode;
}

const ProductFilter: React.FC<IProps> = (props) => {
  return (
    <View>
      <View>
        <ProductFIlter />
      </View>
    </View>
  );
};  

export default ProductFilter;
