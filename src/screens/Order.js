import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import CardOrders from "../components/CardOrders";
import { useSelector } from "react-redux";
import { useGetOrdersUserQuery } from "../services/orders";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyListComponent from "../components/EmptyListComponent";

const Order = () => {
  const localId = useSelector((state) => state.user.localId);
  const { data: orders, isLoading } = useGetOrdersUserQuery({ localId });

  if (isLoading) return <LoadingSpinner />;
  if (!orders) return <EmptyListComponent message="No hay ordenes" />;

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardOrders order={item} />}
    />
  );
};

export default Order;

const styles = StyleSheet.create({});
