import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { color } from "../global/color";
import Shadow from "../components/wrappers/Shadow";
import { useGetProductCartQuery, usePostCartMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Counter from "../components/Counter";

const ProductDetail = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const { product } = route.params;
  const navigation = useNavigation();
  const [triggerAddProduct] = usePostCartMutation();
  const localId = useSelector((state) => state.user.localId);
  const { data: productCart } = useGetProductCartQuery({
    localId,
    productId: product.id,
  });

  const increment = () => {
    const cartQuantity = productCart ? productCart.quantity : 0;
    if (quantity >= product.stock - cartQuantity) return;
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleAddproduct = async () => {
    const cartQuantity = productCart ? productCart.quantity : 0;
    if (product.stock - cartQuantity === 0) return;
    const newQuantity = quantity + cartQuantity;
    const cartProduct = {
      ...product,
      quantity: newQuantity,
    };
    const result = await triggerAddProduct({ localId, cartProduct });
    setQuantity(1);
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
          <Text style={styles.title}>Precio: U$S{product.price}</Text>
          <Text style={styles.stock}>Stock: {product.stock}</Text>
          {product.stock - productCart?.quantity === 0 ? (
            <Text style={styles.price}>Producto sin stock</Text>
          ) : (
            <Counter
              quantity={quantity}
              increment={increment}
              decrement={decrement}
            />
          )}
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
    gap: 10,
  },
  image: {
    height: 140,
  },
  containerText: {
    alignItems: "center",
    gap: 10,
    padding: 5,
  },
  title: {
    color: color.letra3,
    fontFamily: "RobotoBold",
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
  },
  description: {
    color: color.letra,
    fontFamily: "RobotoRegular",
    fontSize: 15,
  },
  button: {
    backgroundColor: color.terciario,
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  textButton: {
    color: color.primario,
    fontFamily: "RobotoBold",
    fontSize: 18,
  },
  stock: {
    fontSize: 15,
    color: color.letra3,
  },
});
