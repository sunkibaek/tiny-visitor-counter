import { SafeAreaView, StyleSheet } from "react-native";

import HeaderSection from "./HeaderSection";
import CounterSection from "./CounterSection";
import ControlSection from "./ControlSection";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <HeaderSection />

    <CounterSection />

    <ControlSection />
  </SafeAreaView>
);

export default HomeScreen;
