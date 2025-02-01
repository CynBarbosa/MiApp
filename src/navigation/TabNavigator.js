import { StyleSheet } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import { color } from "../global/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyProfileStack from "./MyProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon text="Home" icon="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon text="Carrito" icon="shopping-cart" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon text="Orden" icon="list-alt" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon text="Perfil" icon="user" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: color.secundario,
    height: 60,
    padding: 10,
  },
});
