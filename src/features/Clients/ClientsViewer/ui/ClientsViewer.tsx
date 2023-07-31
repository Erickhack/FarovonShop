import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ClientViewerContain } from "../../../../entities";
import { EditclientSVG24 } from "../../../../shared/assets";
import { SwitcherSVGIcon } from "../lib";

interface IProps {
  Infos: {
    user: string;
    phoneNumber: string;
    location: string;
  }[];
}

export const ClientsViewer: React.FC<IProps> = (props) => {
  return (
    <View style={style.contain}>
      {props.Infos.map((Info, index) => (
        <ClientViewerContain
          focueView={
            <View style={style.selectedContain}>
              <EditclientSVG24 />
            </View>
          }
          key={`${Info}-${index}`}
        >
          {Object.entries(Info).map((elem, index) => (
            <View style={style.viewerInfoContain} key={`${elem}-${index}`}>
              <View>
                {SwitcherSVGIcon(elem[0] as keyof IProps["Infos"][number])}
              </View>
              <View>
                <Text>{elem[1]}</Text>
              </View>
            </View>
          ))}
        </ClientViewerContain>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    display: "flex",
    gap: 12,
  },
  selectedContain: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  viewerInfoContain: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});
