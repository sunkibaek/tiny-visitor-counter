import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
});

const ControlSection = () => (
  <View style={styles.container}>
    <Button.Link title="Exit" fullWidth={true} />

    <Button title="Enter" fullWidth={true} />
  </View>
);

export default ControlSection;
