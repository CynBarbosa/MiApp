import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Header from "../components/Header";
import Order from "../screens/Order";

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
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
              title="Compras Finalizadas"
              isDarkMode={isDarkMode}
              onToggle={toggleSwitch}
            />
          );
        },
      })}
    >
      <Stack.Screen name="Orders" component={Order} />
    </Stack.Navigator>
  );
};

export default OrdersStack;
