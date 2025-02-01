import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { color } from "./src/global/color";
import { fonts } from "./src/global/font";
import { useFonts } from "expo-font";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { init } from "./src/config/dbSQLite";

export default function App() {
  init();
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
      <StatusBar style="light" backgroundColor={color.primario} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
