import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  baseContainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  baseText: {
    fontSize: 16,
    fontWeight: "600",
  },
  defaultContainer: {
    backgroundColor: "#141414",
  },
  defaultText: {
    color: "#ffffff",
  },
  linkContainer: {
    backgroundColor: "transparent",
  },
  linkText: {
    color: "#141414",
  },
  fullWidthContainer: {
    flex: 1,
  },
});

const BaseButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  fullWidth,
}) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.baseContainer,
      fullWidth && styles.fullWidthContainer,
      containerStyle,
    ]}
  >
    <Text style={[styles.baseText, textStyle]}>{title}</Text>
  </Pressable>
);

const Button = ({ title, onPress, fullWidth }) => (
  <BaseButton
    onPress={onPress}
    containerStyle={styles.defaultContainer}
    textStyle={styles.defaultText}
    title={title}
    fullWidth={fullWidth}
  />
);

Button.Link = ({ title, onPress, fullWidth }) => (
  <BaseButton
    title={title}
    onPress={onPress}
    containerStyle={styles.linkContainer}
    textStyle={styles.linkText}
    fullWidth={fullWidth}
  />
);

export default Button;
