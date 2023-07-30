import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SelectClientContain } from "../../../../entities";
import { SelectedSVG } from "../../../../shared/assets";
import { SwitcherSVGIcon } from "../lib";

interface IProps {
  Infos: {
    user: string;
    phoneNumber: string;
    location: string;
  }[];
}

export const SelectClientViewer: React.FC<IProps> = (props) => {
  const [infoList, setInfoList] = React.useState(
    props.Infos.map((elem) => ({ info: elem, selected: false }))
  );

  const handlePress = (index: number) => {
    setInfoList((prev) => {
      const newPrev = prev.map((elem) => ({ ...elem, selected: false }));
      newPrev.splice(index, 1, {
        ...prev[index],
        selected: !prev[index].selected,
      });
      return newPrev;
    });
  };

  return (
    <View style={style.contain}>
      {infoList.map((Info, index) => (
        <Pressable
          onPress={() => {
            handlePress(index);
          }}
          key={index}
        >
          <SelectClientContain
            focused={Info.selected}
            focueView={
              <View style={style.selectedContain}>
                <SelectedSVG />
              </View>
            }
          >
            {Object.entries(Info.info).map((elem, index) => (
              <View style={style.viewerInfoContain} key={`${elem}-${index}`}>
                <View>
                  {SwitcherSVGIcon(elem[0] as keyof IProps["Infos"][number])}
                </View>
                <View>
                  <Text>{elem[1]}</Text>
                </View>
              </View>
            ))}
          </SelectClientContain>
        </Pressable>
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
