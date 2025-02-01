import { FlatList, StyleSheet, Text, View } from "react-native";
import Orders from "../data/orders.json";
import CardOrders from "../components/CardOrders";

const Order = () => {
  return (
    <View>
      <FlatList
        data={Orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardOrders orders={item} />}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
