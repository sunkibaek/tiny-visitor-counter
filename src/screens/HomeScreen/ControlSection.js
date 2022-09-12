import { Button, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const ControlSection = () => (
  <View style={styles.container}>
    <Button title="Exit" />
    <Button title="Enter" />
  </View>
);

export default ControlSection;
