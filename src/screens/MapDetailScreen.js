import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

const MapDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  return (
    <>
      <Text style={{ fontSize: 48 }}>Item {_id}</Text>
    </>
  );
};

export default MapDetailScreen;
