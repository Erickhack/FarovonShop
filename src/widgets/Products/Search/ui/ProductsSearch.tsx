import React from "react";
import { InputTextContainer } from "../../../../entities";
import { InputText } from "../../../../features";
import { View } from "react-native";
import { SearchSVG } from "../../../../shared/assets";

export const ProductsSearch: React.FC = () => {
  const [focused, setFocused] = React.useState<boolean>(false);

  return (
    <View>
      <InputTextContainer icon={SearchSVG} borderd={false} focused={focused}>
        <InputText
          placeholder="Поиск товаров"
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </InputTextContainer>
    </View>
  );
};
