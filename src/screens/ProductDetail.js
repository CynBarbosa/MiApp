import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { color } from "../global/color";
import Shadow from "../components/wrappers/Shadow";
import { usePostCartMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const [triggerAddProduct] = usePostCartMutation();
  const localId = useSelector((state) => state.user.localId);

  const handleAddproduct = async () => {
    const cartProduct = {
      ...product,
      quantity: 1,
    };
    const result = await triggerAddProduct({ localId, cartProduct });
    navigation.navigate("CartStack");
  };
  return (
    <View style={styles.container}>
      <Shadow>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title.toUpperCase()}</Text>
          <Text style={styles.description}>
            {product.description.toLowerCase()}
          </Text>
          <View style={styles.PriceStock}>
            <Text style={styles.price}>Precio: U$S{product.price}</Text>
            <Text style={styles.price}>Stock: {product.stock}</Text>
          </View>
          <Pressable style={styles.button} onPress={handleAddproduct}>
            <Text style={styles.textButton}>Agregar al carrito</Text>
          </Pressable>
        </View>
      </Shadow>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primario,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    gap: 20,
  },
  image: {
    height: 140,
  },
  containerText: {
    alignItems: "center",
    gap: 25,
    padding: 5,
  },
  title: {
    color: color.letra3,
    fontFamily: "RobotoBold",
    fontSize: 18,
    marginTop: 5,
    textAlign: "center",
  },
  description: {
    color: color.letra,
    fontFamily: "RobotoRegular",
    fontSize: 15,
  },
  PriceStock: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  price: {
    fontFamily: "RobotoRegular",
    color: color.letra3,
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: color.terciario,
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 20,
  },
  textButton: {
    color: color.primario,
    fontFamily: "RobotoBold",
    fontSize: 18,
  },
});
