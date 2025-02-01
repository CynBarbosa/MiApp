import { StyleSheet, Text, View } from "react-native";

const EmptyListComponent = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default EmptyListComponent;

const styles = StyleSheet.create({});
