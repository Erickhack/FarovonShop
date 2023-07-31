import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { InputTextContainer } from "../../../../entities";
import { InputText } from "../../../../features";

interface IProps {
  onAddClient: () => void;
}

export const AddClientForm: React.FC<IProps> = (props) => {
  return (
    <View style={style.contain}>
      <View style={style.form}>
        <View style={style.fieldContain}>
          <View>
            <Text>Имя</Text>
          </View>
          <InputTextContainer borderd={false}>
            <InputText placeholder="Имя клиента" />
          </InputTextContainer>
        </View>

        <View style={style.fieldContain}>
          <View>
            <Text>Номер телефона</Text>
          </View>
          <InputTextContainer borderd={false}>
            <InputText placeholder="Телефон клиента" />
          </InputTextContainer>
        </View>

        <View style={style.fieldContain}>
          <View>
            <Text>Адрес</Text>
          </View>
          <InputTextContainer borderd={false}>
            <InputText placeholder="Адрес клиента" />
          </InputTextContainer>
        </View>
      </View>
      <View>
        <Button
          title="Добавить клиента"
          color="#032E4D"
          onPress={props.onAddClient}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    width: "100%",
    display: "flex",
    gap: 48,
  },
  form: {},
  fieldContain: {
    display: "flex",
    gap: 12,
  },
});
