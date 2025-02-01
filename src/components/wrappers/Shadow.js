import { StyleSheet, Text, View } from "react-native";

const Shadow = ({ children, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

export default Shadow;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
