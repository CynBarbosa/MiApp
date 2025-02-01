import { StyleSheet, View, Image, Text } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../services/user";
import LoadingSpinner from "../components/LoadingSpinner";
import { color } from "../global/color";
import { deleteSesion } from "../config/dbSQLite";
import { deleteUser } from "../feature/userSlice";

const MyProfile = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const { data: user, isLoading, error } = useGetUserQuery({ localId });
  const dispatch = useDispatch();

  const onLogout = () => {
    deleteSesion();
    dispatch(deleteUser({ error: error }));
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={
            user?.image
              ? { uri: user.image }
              : require("../../assets/defaultUser.png")
          }
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <View>
        <Text style={styles.text}>Direccion: {user?.address}</Text>
      </View>
      <SubmitButton
        title="Agregar imagen de perfil"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <SubmitButton
        title="Agregar localizacion"
        onPress={() => navigation.navigate("LocationSelector")}
      />
      <SubmitButton title="Cerrar Sesion" onPress={onLogout} />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    backgroundColor: color.letra3,
    color: color.primario,
    fontSize: 16,
    marginVertical: 10,
    padding: 5,
    fontFamily: "RobotoRegular",
  },
});
