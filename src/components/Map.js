import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const response = [
  {
    id: "1",
    coordinates: {
      latitude: 34.048927,
      longitude: -111.093735,
    },
    title: "Arizona",
    description: "Arizona",
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "2",
    coordinates: {
      latitude: 39.113014,
      longitude: -105.358887,
    },
    title: "Colorado",
    description: "Colorado",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "3",
    coordinates: {
      latitude: 39.876019,
      longitude: -117.224121,
    },
    title: "Nevada",
    description: "Nevada",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "4",
    coordinates: {
      latitude: 43.0,
      longitude: -75.0,
    },
    title: "New York",
    description: "New York",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "5",
    coordinates: {
      latitude: 41.203323,
      longitude: -77.194527,
    },
    title: "Pennsylvania",
    description: "Pennsylvania",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "6",
    coordinates: {
      latitude: 42.032974,
      longitude: -93.581543,
    },
    title: "Iowa",
    description: "Iowa",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "7",
    coordinates: {
      latitude: 35.860119,
      longitude: -86.660156,
    },
    title: "Tennessee",
    description: "Tennessee",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
];

const Map = () => {
  const [spot, setSpot] = useState(1);
  const [visible, setVisible] = useState(false);

  const showCard = (event) => {
    setSpot(event._targetInst.return.key);
    setVisible(true);
  };

  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 37.6,
          longitude: -95.665,
          latitudeDelta: 70,
          longitudeDelta: 1,
        }}
      >
        {response.map((marker) => (
          <Marker
            key={marker.id}
            identifier={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
            onSelect={(event) => {
              setSpot(event._targetInst.return.key);
              setVisible(true);
            }}
            onDeselect={(event) => {
              setVisible(false);
            }}
          >
            <Image source={marker.icon} style={{ height: 32, width: 32 }} />
          </Marker>
        ))}
      </MapView>
      {spot && visible ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setVisible(true);
          }}
        >
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../../assets/arizona-flag.png")}
            />
            <Text style={styles.description}>Arizona</Text>
            <Text style={styles.descriptionDetail}>Region: Southwest</Text>
            <Text style={styles.descriptionCapital}>Capital: Phoenix</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
  card: {
    backgroundColor: "#fff",
    height: 90,
    width: width - 20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    bottom: 100,
    shadowRadius: 20,
    borderRadius: 8,
    padding: 10,
    elevation: 20,
  },
  image: {
    height: 70,
    width: 100,
  },
  description: {
    position: "absolute",
    paddingLeft: width / 2 - 20,
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionDetail: {
    position: "absolute",
    paddingLeft: width / 2 - 10,
    paddingTop: 38,
  },
  descriptionCapital: {
    position: "absolute",
    paddingLeft: width / 2 - 10,
    paddingTop: 58,
  },
});

export default Map;
