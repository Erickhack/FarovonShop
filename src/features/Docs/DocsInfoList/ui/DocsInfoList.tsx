import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { InfoDocContain } from "../../../../entities";
import { DocumentSVG24 } from "../../../../shared/assets";

interface IProps {
  DocsInfoNames: string[];
}

export const DocsInfoList: React.FC<IProps> = (props) => {
  return (
    <View style={style.contain}>
      {props.DocsInfoNames.map((name) => (
        <InfoDocContain>
          <View>
            <Text>name</Text>
          </View>
          <View>
            <DocumentSVG24 />
          </View>
        </InfoDocContain>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    gap: 16,
  },
});
