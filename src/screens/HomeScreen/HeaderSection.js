import { StyleSheet, View } from "react-native";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 8,
  },
});

const HeaderSection = () => (
  <View style={styles.container}>
    <Button.Link title="Reset" shrinked={true} />
  </View>
);

export default HeaderSection;
