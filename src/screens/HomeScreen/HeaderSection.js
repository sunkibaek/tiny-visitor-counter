import { Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 8,
  },
});

const HeaderSection = () => (
  <View style={styles.container}>
    <Button title="Reset" />
  </View>
);

export default HeaderSection;
