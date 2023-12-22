import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputTextContainer } from "../../../../entities";
import { Button } from "react-native";
import { InputText } from "../../../../features";
import Svg, { Path, SvgProps } from "../../../../shared/types";
import { useAppSelector } from "../../../../shared/hooks";

const IconUser = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#4D6373"
      d="M12.12 13.53h-.17c-2.27-.07-3.97-1.84-3.97-4.02 0-2.22 1.81-4.03 4.03-4.03s4.03 1.81 4.03 4.03a4.014 4.014 0 0 1-3.89 4.02h-.03ZM12 6.97c-1.4 0-2.53 1.14-2.53 2.53a2.52 2.52 0 0 0 2.43 2.53.84.84 0 0 1 .23 0 2.535 2.535 0 0 0 2.4-2.53c0-1.39-1.13-2.53-2.53-2.53ZM12 22.75c-2.69 0-5.26-1-7.25-2.82a.755.755 0 0 1-.24-.63c.13-1.19.87-2.3 2.1-3.12 2.98-1.98 7.81-1.98 10.78 0 1.23.83 1.97 1.93 2.1 3.12.03.24-.06.47-.24.63A10.71 10.71 0 0 1 12 22.75ZM6.08 19.1A9.208 9.208 0 0 0 12 21.25c2.17 0 4.26-.76 5.92-2.15-.18-.61-.66-1.2-1.37-1.68-2.46-1.64-6.63-1.64-9.11 0-.71.48-1.18 1.07-1.36 1.68Z"
    />
    <Path
      fill="#4D6373"
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
    />
  </Svg>
);

const IconKey = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#4D6373"
      d="M6.18 22.75c-.1 0-.21-.01-.3-.02l-2.17-.3c-1.04-.14-1.98-1.07-2.14-2.13l-.3-2.19c-.1-.7.2-1.61.7-2.12l4.39-4.39c-.71-2.84.11-5.84 2.2-7.91 3.24-3.23 8.51-3.24 11.76 0a8.26 8.26 0 0 1 2.43 5.88c0 2.22-.86 4.31-2.43 5.88-2.1 2.08-5.09 2.9-7.91 2.18l-4.4 4.39c-.42.44-1.17.73-1.83.73Zm8.25-19.99c-1.75 0-3.49.66-4.82 1.99a6.803 6.803 0 0 0-1.7 6.85c.08.27.01.55-.19.75l-4.7 4.7c-.17.17-.31.61-.28.84l.3 2.19c.06.38.47.81.85.86l2.18.3c.24.04.68-.1.85-.27l4.72-4.71c.2-.2.49-.26.75-.18 2.41.76 5.04.11 6.84-1.69 1.28-1.28 1.99-3 1.99-4.82 0-1.83-.71-3.54-1.99-4.82a6.727 6.727 0 0 0-4.8-1.99Z"
    />
    <Path
      fill="#4D6373"
      d="M9.19 20.54c-.19 0-.38-.07-.53-.22l-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14.5 11.75c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z"
    />
  </Svg>
);

interface IProps {
  onPress: (values: { email: string; password: string }) => void;
}

export const LoginForm: React.FC<IProps> = (props) => {
  const { pending } = useAppSelector((store) => store.Login);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlePress = () => {
    props.onPress({ email, password });
  };

  const handleChangeUser = (text: string) => setEmail(text);
  const handleChangePassword = (text: string) => setPassword(text);

  return (
    <View>
      <View style={styles.formContain}>
        <View style={styles.fieldContain}>
          <View>
            <Text>Логин</Text>
          </View>
          <View>
            <InputTextContainer icon={IconUser}>
              <InputText
                placeholder="Введите ваш логин"
                onChangeText={handleChangeUser}
                defaultValue={email}
              />
            </InputTextContainer>
          </View>
        </View>
        <View style={styles.fieldContain}>
          <View>
            <Text>Пароль</Text>
          </View>
          <View>
            <InputTextContainer icon={IconKey}>
              <InputText
                placeholder="Введите ваш пароль"
                secureTextEntry
                onChangeText={setPassword}
                defaultValue={password}
              />
            </InputTextContainer>
          </View>
        </View>
      </View>
      <View style={styles.containerBtnForm}>
        <Button
          disabled={pending}
          title={pending ? "Загрузка..." : "Войти"}
          color="#032E4D"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBtnForm: {
    borderRadius: 5,
  },
  formContain: {
    marginBottom: 32,
    display: "flex",
    gap: 24,
  },
  fieldContain: {
    display: "flex",
    gap: 12,
  },
});
