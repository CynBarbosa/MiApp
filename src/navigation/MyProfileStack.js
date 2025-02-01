import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Header from "../components/Header";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import LocationSelector from "../screens/LocationSelector";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
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
              title="Perfil"
              isDarkMode={isDarkMode}
              onToggle={toggleSwitch}
            />
          );
        },
      })}
    >
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
      <Stack.Screen name="LocationSelector" component={LocationSelector} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;
