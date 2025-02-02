import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { color } from "../global/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CardOrders = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name="newspaper-o" size={50} color={color.letra3} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>Precio: u$u {order.total}</Text>
      </View>
      <AntDesign
        style={styles.button}
        name="check"
        size={30}
        color={color.letra3}
      />
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
    gap: 5,
    borderRadius: 10,
  },
  content: {
    gap: 10,
    width: "70%",
    paddingLeft: 10,
  },
  text: {
    color: color.letra,
  },
  button: {
    marginTop: 10,
    marginLeft: 10,
  },
  icon: {
    justifyContent: "center",
  },
});
