import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import { useGetProductsQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductsByCategory = ({ route }) => {
  const { category } = route.params;
  const { data, isError, error, isLoading, isSuccess } =
    useGetProductsQuery(category);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setProducts(Object.values(data));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess) {
      setProducts(
        Object.values(data).filter((product) =>
          product.title.toUpperCase().includes(keyword)
        )
      );
    }
  }, [keyword, isSuccess]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return error;

  return (
    <View style={styles.container}>
      <Search onChangeKeyword={(t) => setKeyword(t.toUpperCase())} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
