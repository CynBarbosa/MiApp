import { Pressable, StyleSheet, Text, View } from "react-native";
import Shadow from "../components/wrappers/Shadow";
import { color } from "../global/color";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../feature/shopSlace";

const CardItemCategories = ({ item: category }) => {
  const navigation = useNavigation();
  const dispach = useDispatch();
  return (
    <Pressable
      onPress={() => {
        dispach(setProductsFilteredByCategory(category));
        navigation.navigate("ProductsByCategory", { category });
      }}
    >
      <Shadow style={styles.container}>
        <Text style={styles.title}>{category}</Text>
      </Shadow>
    </Pressable>
  );
};

export default CardItemCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primario,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    gap: 20,
    margin: 10,
    borderRadius: 15,
  },
  title: {
    color: color.letra,
    fontSize: 20,
  },
});
