import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { color } from "../global/color";
import { useState } from "react";

const Search = ({ onChangeKeyword }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const regex = /[+\-/*%<>!@#$^&()_={}[\]|\\:;"'<>,.?~`]/;
    if (regex.test(textInput)) {
      return setError("Caracter no valido");
    }
    setError("");
    onChangeKeyword(textInput.toUpperCase());
  };

  const removeSearch = () => {
    onChangeKeyword("");
    setTextInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImput}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text.toUpperCase())}
          placeholderTextColor={color.primario}
          placeholder="Buscar"
        />
        <Pressable style={styles.button} onPress={search}>
          <FontAwesome name="search" size={26} color={color.letra3} />
        </Pressable>
        <Pressable style={styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={26} color={color.letra3} />
        </Pressable>
      </View>
      <Text style={styles.error}>{error ? error : ""}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingBottom: 0,
    backgroundColor: color.secundario,
  },
  containerImput: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: color.letra,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: color.primario,
    flex: 1,
    marginRight: 2,
  },
  error: {
    color: color.letra2,
    fontFamily: "BebasNeue",
    margin: 2,
  },
  button: {
    alignItems: "center",
    margin: 10,
    marginTop: 7,
  },
});
