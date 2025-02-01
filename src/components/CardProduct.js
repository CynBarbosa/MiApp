import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Shadow from "./wrappers/Shadow";
import { color } from "../global/color";
import { useNavigation } from "@react-navigation/native";

const CardProduct = ({ product }) => {
  const { title, price, thumbnail } = product;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ProductDetail", { product });
      }}
    >
      <Shadow style={styles.conteiner}>
        <Image
          style={styles.image}
          source={{ uri: thumbnail }}
          resizeMode="contain"
        />
        <View style={styles.cardContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title.toUpperCase()}
          </Text>
          <Text style={styles.price}>Precio: U$S {price}</Text>
          <View style={styles.card}></View>
        </View>
      </Shadow>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: color.primario,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    gap: 8,
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 13,
    color: color.letra3,
    fontFamily: "RobotoBold",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 13,
    flex: 2,
    color: color.letra,
    fontFamily: "RobotoBold",
  },
});
