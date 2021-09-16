import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "./src/screens/MapScreen";
import MapListScreen from "./src/screens/MapListScreen";
import MapDetailScreen from "./src/screens/MapDetailScreen";
import { setNavigator } from "./src/navigationRef";
import Icon from "react-native-vector-icons/Ionicons";

const mapListFlow = createStackNavigator({
  MapList: MapListScreen,
  MapDetail: MapDetailScreen,
});

mapListFlow.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-list" color={tintColor} size={30} />
  ),
};

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator(
    {
      MapView: MapScreen,
      mapListFlow,
    },
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: "#3D8836",
      },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
