import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/SignUp";
import Header from "../components/Header";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
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
              title="Mi App"
              isDarkMode={isDarkMode}
              onToggle={toggleSwitch}
            />
          );
        },
      })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
