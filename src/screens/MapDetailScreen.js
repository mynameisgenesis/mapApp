import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const MapDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const _title = navigation.getParam("_title");

  MapDetailScreen.navigationOptions = {
    title: _title,
  };

  return (
    <>
      <Text style={{ fontSize: 48 }}>{_title}</Text>
    </>
  );
};

export default MapDetailScreen;
