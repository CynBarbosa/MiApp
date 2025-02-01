import { StyleSheet, Text, View } from "react-native";
import SwitchBackground from "./SwitchBackground";
import { color } from "../global/color";
import ArrowGoBack from "./ArrowGoBack";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isDarkMode, onToggle, title }) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      {navigate.canGoBack() ? <ArrowGoBack /> : null}
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <SwitchBackground isDarkMode={isDarkMode} onToggle={onToggle} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: color.secundario,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  title: {
    color: color.letra3,
    fontSize: 20,
    flex: 5,
    marginTop: 10,
    fontFamily: "RobotoBold",
  },
});
