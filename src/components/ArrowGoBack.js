import { StyleSheet, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { color } from "../global/color";

const ArrowGoBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
      <Entypo name="arrow-with-circle-left" size={24} color={color.letra3} />
    </Pressable>
  );
};

export default ArrowGoBack;

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 15,
    flex: 1,
    position: "absolute",
    left: 0,
  },
});
