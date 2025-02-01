import { StyleSheet, Switch, View } from "react-native";

const SwitchBackground = ({ isDarkMode, onToggle }) => {
  return (
    <View style={styles.Container}>
      <Switch
        value={isDarkMode}
        onValueChange={onToggle}
        thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
        trackColor={{ false: "#767577", true: "#99BEFB" }}
      />
    </View>
  );
};

export default SwitchBackground;

const styles = StyleSheet.create({
  Container: {
    marginLeft: 10,
    flex: 1,
    position: "absolute",
    right: 0,
  },
});
