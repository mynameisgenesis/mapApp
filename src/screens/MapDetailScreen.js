import React from "react";
import { Text, StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 2;

const MapDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const _title = navigation.getParam("_title");

  MapDetailScreen.navigationOptions = {
    title: _title,
  };

  return (
    <>
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
        <ScrollView scrollEnabled={true}>
          <Image
            style={styles.image}
            source={require("../../assets/arizona-flag.png")}
          />
          <Spacer>
            <Text style={styles.title}>Description</Text>
          </Spacer>
          <Spacer>
            <Text style={styles.detail}>Region: Southwest</Text>
            <Text style={styles.detail}>Capital: Phoenix</Text>
            <Text style={styles.detail}>Area: 113,998 mi²</Text>
            <Text style={styles.detail}>Population: 7.279 million</Text>
            <Text style={styles.detail}>
              Border: Colorado, Utah, New Mexico, Texas, California, Mexico
            </Text>
          </Spacer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
  },
});

export default MapDetailScreen;
