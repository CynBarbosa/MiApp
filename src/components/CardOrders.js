import { Pressable, StyleSheet, Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { color } from "../global/color";

const CardOrders = ({ orders }) => {
  const date = new Date(orders.createdAt).toLocaleString();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>Precio: u$u {orders.total}</Text>
      </View>
      <Pressable style={styles.button}>
        <Fontisto name="search" size={24} color={color.letra3} />
      </Pressable>
    </View>
  );
};

export default CardOrders;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: color.primario,
    padding: 15,
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  content: {
    gap: 10,
  },
  text: {
    color: color.letra,
  },
  button: {
    marginTop: 10,
  },
});
