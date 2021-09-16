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
      latitude: -15.59611,
      longitude: -56.09667,
    },
    title: "Cuiabá",
    description: "Cuiabá",
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "2",
    coordinates: {
      latitude: -20.44278,
      longitude: -54.64639,
    },
    title: "Campo Grande",
    description: "Campo Grande",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "3",
    coordinates: {
      latitude: -23.5489,
      longitude: -46.6388,
    },
    title: "São Paulo",
    description: "São Paulo",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "4",
    coordinates: {
      latitude: -22.9035,
      longitude: -43.2096,
    },
    title: "Rio de Janeiro",
    description: "Rio de Janeiro",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "5",
    coordinates: {
      latitude: -3.71839,
      longitude: -38.5434,
    },
    title: "Ceará",
    description: "Ceará",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "6",
    coordinates: {
      latitude: -30.0277,
      longitude: -51.2287,
    },
    title: "Rio Grande do Sul",
    description: "Rio Grande do Sul",
    category: 1,
    icon: require("../../assets/location-pin.png"),
  },
  {
    id: "7",
    coordinates: {
      latitude: -9.974,
      longitude: -67.8076,
    },
    title: "Acre",
    description: "Acred",
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
          latitude: -15.59611,
          longitude: -56.09667,
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
              source={require("../../assets/MatoGrosso.png")}
            />
            <Text style={styles.description}>Mato Grosso</Text>
            <Text style={styles.descriptionDetail}>Region: Midwest</Text>
            <Text style={styles.descriptionCapital}>Capital: Cuiabá</Text>
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
