import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CardCartProduct from "../components/CardCartProduct";
import { color } from "../global/color";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyListComponent from "../components/EmptyListComponent";
import { useNavigation } from "@react-navigation/native";
import { usePostOrdersMutation } from "../services/orders";
import { useSelector } from "react-redux";
import { useGetCartQuery, useDeleteCartMutation } from "../services/cart";

const Cart = () => {
  const navigation = useNavigation();
  const [triggerPost] = usePostOrdersMutation();
  const [triggerDeleteCart] = useDeleteCartMutation();
  const localId = useSelector((state) => state.user.localId);
  const { data: cart, isLoading } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }
  }, [cart]);

  const confirmCart = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      products: cart,
      createdAt,
      total,
    };
    triggerPost({ order, localId });
    triggerDeleteCart({ localId });
    navigation.navigate("OrdersStack");
  };
  if (isLoading) return <LoadingSpinner />;
  if (!cart)
    return <EmptyListComponent message="No hay productos en el carrito" />;
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.conten}>
        <Text style={styles.total}>Total: u$s{total}</Text>
        <Pressable style={styles.button} onPress={confirmCart}>
          <Text style={styles.textButton}>Finalizar compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  conten: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  total: {
    backgroundColor: color.letra3,
    margin: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: color.terciario,
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: color.primario,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  lista: {
    marginBottom: 110,
  },
});
