import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem, Avatar } from "react-native-elements";

const response = [
  {
    id: "1",
    title: "Arizona",
    image: require("../../assets/arizona-flag.png"),
  },
  {
    id: "2",
    title: "Colorado",
    image: require("../../assets/colorado-flag.png"),
  },
  {
    id: "3",
    title: "Nevada",
    image: require("../../assets/nevada-flag.png"),
  },
  {
    id: "4",
    title: "New York",
    image: require("../../assets/new-york-flag.png"),
  },
  {
    id: "5",
    title: "Pennsylvania",
    image: require("../../assets/pennsylvania-flag.png"),
  },
  {
    id: "6",
    title: "Iowa",
    image: require("../../assets/iowa-flag.png"),
  },
  {
    id: "7",
    title: "Tennessee",
    image: require("../../assets/tennessee-flag.png"),
  },
];

const country = response[0];

const MapListScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
        <FlatList
          data={response}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MapDetail", {
                    _id: item.id,
                    _title: item.title,
                  })
                }
              >
                <ListItem bottomDivider key={item.id}>
                  <Avatar containerStyle={styles.avatar} source={item.image} />
                  <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

MapListScreen.navigationOptions = {
  title: "States",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-list" color={tintColor} size={30} />
  ),
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 10,
  },
  avatar: {
    height: 65,
    width: 100,
  },
});

export default MapListScreen;
