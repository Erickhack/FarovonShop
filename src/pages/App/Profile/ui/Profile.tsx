import React from "react";
import { View, StyleSheet } from "react-native";
import {
  UserInfoProfile,
  UserLogOutBtn,
  UserPhotoProfile,
} from "../../../../widgets";

const Profile = () => {
  const handlePress = () => {};

  return (
    <View style={style.contain}>
      <View>
        <UserPhotoProfile />
      </View>
      <View>
        <UserInfoProfile />
      </View>
      <View>
        <UserLogOutBtn onPress={handlePress} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contain: {
    flex: 1,
    gap: 40,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});

export default Profile;
