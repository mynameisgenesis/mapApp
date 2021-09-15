import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem, Avatar } from "react-native-elements";

const response = [
  {
    id: "1",
    title: "Cuiabá",
    image: require("../../assets/Cuiaba.png"),
  },
  {
    id: "2",
    title: "Campo Grande",
    image: require("../../assets/CampoGrande.jpeg"),
  },
  {
    id: "3",
    title: "São Paulo",
    image: require("../../assets/SãoPaulo.png"),
  },
  {
    id: "4",
    title: "Rio de Janeiro",
    image: require("../../assets/RioDeJaniero.png"),
  },
  // {
  //   id: "5",
  //   title: "Ceará",
  //   image: require("../../assets/Ceará.svg"),
  // },
  // {
  //   id: "6",
  //   title: "Rio Grande do Sul",
  //   image: require("../../assets/RioGrandeDoSul.svg"),
  // },
  {
    id: "7",
    title: "Acre",
    image: require("../../assets/Acre.png"),
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
                  navigation.navigate("MapDetail", { _id: item.id })
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
    height: 50,
    width: 50,
  },
});

export default MapListScreen;
