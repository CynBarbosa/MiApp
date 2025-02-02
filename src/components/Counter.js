import { StyleSheet, Text, View, Pressable } from "react-native";
import { color } from "../global/color";
import Entypo from "@expo/vector-icons/Entypo";

const Counter = ({ quantity, increment, decrement }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decrement}>
        <Entypo name="squared-minus" size={30} color={color.terciario} />
      </Pressable>
      <Text style={styles.text}>{quantity}</Text>
      <Pressable style={styles.button} onPress={increment}>
        <Entypo name="squared-plus" size={30} color={color.terciario} />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    width: 30,
    height: 30,
  },
  textButton: {
    fontSize: 25,
    color: color.primario,
  },
  text: {
    color: color.letra3,
    fontSize: 20,
  },
});
