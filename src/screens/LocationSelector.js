import { StyleSheet, Text, View } from "react-native";
import SubMitButton from "../components/SubmitButton";
import { useEffect, useState } from "react";
import MapPreview from "../components/MapPreview";
import { color } from "../global/color";
import * as Location from "expo-location";
import { googleApi } from "../googleApi";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { usePatchLocationMutation } from "../services/user";

const LocationSelector = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerLocation] = usePatchLocationMutation();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({
    latitud: "",
    longitud: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status != "granted") return;
        const newLocation = await Location.getCurrentPositionAsync();

        setLocation({
          latitud: newLocation.coords.latitude,
          longitud: newLocation.coords.longitude,
        });
      } catch (error) {
        return (
          <View>
            <Text>{error.message}</Text>
          </View>
        );
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (location.latitud) {
        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitud},${location.longitud}&key=${googleApi}`;
        try {
          const response = await fetch(urlReverseGeocoding);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        } catch (error) {
          return (
            <View>
              <Text>{error.message}</Text>
            </View>
          );
        }
      }
    })();
  }, [location]);

  const handleConfirmLocation = () => {
    triggerLocation({ localId, address, location });
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion: {address}</Text>
      <MapPreview location={location} />
      <SubMitButton
        title="Confirmar Ubicacion"
        onPress={handleConfirmLocation}
      />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    color: color.primario,
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
});
