import { StyleSheet, Image, View } from "react-native";
import SubMitButton from "../components/SubmitButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { usePatchImageProfileMutation } from "../services/user";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ImageSelector = () => {
  const localId = useSelector((state) => state.user.localId);
  const [image, setImage] = useState("");
  const [triggerAddImageProfile] = usePatchImageProfileMutation();
  const navigation = useNavigation();

  const pickImage = async (method) => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) return;

    const config = {
      aspect: [1, 1],
      quality: 0.2,
      base64: true,
      allowsEditing: true,
    };
    const result =
      method == "camera"
        ? await ImagePicker.launchCameraAsync(config)
        : await ImagePicker.launchImageLibraryAsync(config);

    if (result.canceled) return;
    setImage("data:image/jpg;base64," + result.assets[0].base64);
  };

  const confirmImage = () => {
    triggerAddImageProfile({ localId, image });
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={
            image ? { uri: image } : require("../../assets/defaultUser.png")
          }
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <SubMitButton
        title="Imagen con la camara"
        onPress={() => pickImage("camera")}
      />
      <SubMitButton
        title="Imagen de la galeria"
        onPress={() => pickImage("")}
      />
      <SubMitButton title="Confirmar" onPress={confirmImage} />
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  containerImg: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    overflow: "hidden",
  },
  img: {
    width: 200,
    height: 200,
  },
});
