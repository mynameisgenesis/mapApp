import React from "react";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import Icon from "react-native-vector-icons/Ionicons";

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map />
    </SafeAreaView>
  );
};

MapScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-map" color={tintColor} size={30} />
  ),
};

export default MapScreen;
