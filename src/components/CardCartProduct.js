import { Pressable, StyleSheet, Text, View } from "react-native";
import { color } from "../global/color";
import Entypo from "@expo/vector-icons/Entypo";
import { useSelector } from "react-redux";
import { useDeleteCartProductMutation } from "../services/cart";

const CardCartProduct = ({ product }) => {
  const { title, brand, price } = product;
  const localId = useSelector((state) => state.user.localId);
  const [triggerDeleteItemCart] = useDeleteCartProductMutation();

  const deleteCartProduct = () => {
    triggerDeleteItemCart({ localId, productId: product.id });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerSecundario}>
        <View>
          <Text style={styles.text}>Marca: {brand}</Text>
          <Text style={styles.text}>Precio: u$s{price}</Text>
        </View>
        <Pressable onPress={deleteCartProduct}>
          <Entypo name="trash" size={30} color={color.letra} />
        </Pressable>
      </View>
      <Text style={styles.text}>Cantidad: 1</Text>
    </View>
  );
};

export default CardCartProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primario,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: color.letra,
    fontSize: 18,
    marginBottom: 8,
    fontFamily: "RobotoBold",
    textAlign: "centro",
  },
  containerSecundario: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: color.letra,
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "RobotoRegular",
  },
});
