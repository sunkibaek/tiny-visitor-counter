import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
});

const ControlSection = ({ onExitPress, onEnterPress }) => (
  <View style={styles.container}>
    <Button.Link title="Exit" fullWidth={true} onPress={onExitPress} />

    <Button title="Enter" fullWidth={true} onPress={onEnterPress} />
  </View>
);

export default ControlSection;
