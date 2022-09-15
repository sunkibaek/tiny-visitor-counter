import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  currentVisitorText: {
    fontSize: 128,
    fontWeight: "bold",
  },
  divider: {
    fontSize: 64,
    lineHeight: 128,
  },
  maxVisitorText: {
    fontSize: 64,
    lineHeight: 128,
    marginBottom: -8,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
    width: 360,
    height: 360,
    borderRadius: 180,
  },
});

const CounterSection = ({ current, max }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.row}>
          <Text style={styles.currentVisitorText}>{current}</Text>

          <Text style={styles.divider}> / </Text>
          <Text style={styles.maxVisitorText}>{max}</Text>
        </View>
      </View>
    </View>
  );
};

export default CounterSection;
