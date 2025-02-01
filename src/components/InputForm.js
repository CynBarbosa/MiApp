import { StyleSheet, Text, View, TextInput } from "react-native";
import { color } from "../global/color";

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  titleInput: {
    marginLeft: 16,
    color: color.letra,
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
  input: {
    width: "90%",
    borderBottomWidth: 2,
    borderBottomColor: color.letra3,
    padding: 5,
    fontSize: 14,
    marginHorizontal: "5%",
    marginVertical: 10,
    color: color.letra,
  },
  error: {
    color: color.letra2,
    marginLeft: 16,
    fontSize: 14,
    fontFamily: "RobotoRegular",
  },
});
