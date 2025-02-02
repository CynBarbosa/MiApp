import { StyleSheet, FlatList, View, Text } from "react-native";
import CardItemCategories from "./CardItemCategories";
import { useGetCategoriesQuery } from "../services/shop";
import { color } from "../global/color";
import LoadingSpinner from "./LoadingSpinner";

const Categories = () => {
  const { data: category, isError, error, isLoading } = useGetCategoriesQuery();
  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  return (
    <FlatList
      data={category}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CardItemCategories item={item} />}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  text: {
    color: color.secundario,
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "RobotoBold",
  },
});
