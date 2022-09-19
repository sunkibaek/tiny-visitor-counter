import { StyleSheet, Text, View } from "react-native";

import { CURRENT_STATTUS } from "../../models/Counter";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  currentVisitorText: {
    fontSize: 128,
    fontWeight: "bold",
    fontVariant: ["tabular-nums"],
  },
  divider: {
    height: 1,
    width: 160,
    backgroundColor: "#000000",
  },
  maxVisitorText: {
    fontSize: 64,
    fontVariant: ["tabular-nums"],
    marginTop: 16,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
    width: 360,
    height: 360,
    borderRadius: 180,
  },
  [CURRENT_STATTUS.equalToMax]: {
    color: "#FFC107",
  },
  [CURRENT_STATTUS.overMax]: {
    color: "#F44336",
  },
  [CURRENT_STATTUS.normal]: {
    // no styles
  },
});

const getCurrentVisitorTextStyle = (currentStatus) => {
  return [styles.currentVisitorText, styles[currentStatus]];
};

const CounterSection = ({ current, max, currentStatus }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text
          style={getCurrentVisitorTextStyle(currentStatus)}
          includeFontPadding={false}
        >
          {current}
        </Text>

        <Text style={styles.divider} />

        <Text style={styles.maxVisitorText} includeFontPadding={false}>
          {max}
        </Text>
      </View>
    </View>
  );
};

export default CounterSection;
