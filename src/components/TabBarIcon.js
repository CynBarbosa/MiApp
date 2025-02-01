import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { color } from "../global/color";

const TabBarIcon = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={28} color={color.letra3} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: color.letra3,
    fontSize: 9,
    textAlign: "center",
  },
});
