import { StyleSheet, Text, View } from "react-native";
import { color } from "../global/color";
import SubMitButton from "./SubmitButton";
import { useNavigation } from "@react-navigation/native";

const EmptyListComponent = ({ message }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <SubMitButton
        title="Agrega Productos"
        onPress={() => navigation.navigate("ShopStack")}
      />
    </View>
  );
};

export default EmptyListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  text: {
    color: color.secundario,
    fontSize: 20,
    fontFamily: "RobotoBold",
    backgroundColor: color.letra3,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
