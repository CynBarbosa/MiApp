import { StyleSheet, Text, Pressable } from "react-native";
import { color } from "../global/color";

const SubMitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubMitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.terciario,
    width: "60%",
    margin: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: color.primario,
    fontSize: 16,
    fontFamily: "RobotoBold",
    textAlign: "center",
  },
});
