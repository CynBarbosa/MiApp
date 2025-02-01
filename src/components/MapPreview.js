import { StyleSheet, Image, View } from "react-native";
import { googleApi } from "../googleApi";

const MapPreview = ({ location }) => {
  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?
                            center=${location.latitud},${location.longitud}
                            &zoom=13
                            &size=600x300
                            &maptype=roadmap
                            &markers=color:blue%7Clabel:S%7C${location.latitud},${location.longitud}
                            &key=${googleApi}`;

  return (
    <View style={styles.container}>
      <Image
        source={location.latitud && { uri: mapStaticUrl }}
        style={styles.img}
      />
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 380,
    height: 380,
    backgroundColor: "red",
  },
});
