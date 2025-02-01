import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../feature/counterSlice";

const Counter = () => {
  const [input, setImput] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispach = useDispatch();
  return (
    <View>
      <Button
        title="-"
        onPress={() => {
          dispach(decrement());
        }}
      />
      <Text>{counter}</Text>
      <Button
        title="+"
        onPress={() => {
          dispach(increment());
        }}
      />
      <TextInput
        value={input}
        onChangeText={(t) => {
          setImput(parseInt(t));
        }}
      />
      <Button
        title="cambiar"
        onPress={() => {
          dispach(incrementByAmount(input));
        }}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
