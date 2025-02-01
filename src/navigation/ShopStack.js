import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import ProductsByCategory from "../screens/ProductsByCategory";
import { useState } from "react";
import Header from "../components/Header";

const ShopStack = () => {
  const Stack = createNativeStackNavigator();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((prev) => !prev);
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        contentStyle: {
          backgroundColor: isDarkMode ? "#232323" : "#FFFFFF",
        },
        header: () => {
          return (
            <Header
              title={
                route.name === "Home"
                  ? "Categorias"
                  : route.name === "ProductsByCategory"
                  ? route.params.category
                  : route.params.product.brand
              }
              isDarkMode={isDarkMode}
              onToggle={toggleSwitch}
            />
          );
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
