import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Cart from "../screens/Cart";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((prev) => !prev);
  return (
    <Stack.Navigator
      screenOptions={() => ({
        contentStyle: {
          backgroundColor: isDarkMode ? "#232323" : "#FFFFFF",
        },
        header: () => {
          return (
            <Header
              title="Cart"
              isDarkMode={isDarkMode}
              onToggle={toggleSwitch}
            />
          );
        },
      })}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
