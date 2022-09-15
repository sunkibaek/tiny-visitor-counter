import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";

import HeaderSection from "./HeaderSection";
import CounterSection from "./CounterSection";
import ControlSection from "./ControlSection";

const DEFAULT_MAX = 30;

const styles = StyleSheet.create({
  safeArea: {
    paddingVertical: 16,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

const HomeScreen = () => {
  const [max, setMax] = useState(DEFAULT_MAX);
  const [current, setCurrent] = useState(0);

  const currentStatus = {
    equalToMax: current === max,
    overMax: current > max,
  };

  const increaseCurrent = () => {
    setCurrent((prev) => prev + 1);
  };

  const decreaseCurrent = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return 0;
      }

      return prev - 1;
    });
  };

  const resetAll = () => {
    Alert.alert("Reset", "Are you sure you want to reset?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Reset",
        onPress: () => {
          Alert.prompt("Reset", "Enter new max", (text) => {
            const newMax = parseInt(text, 10);

            if (Number.isNaN(newMax)) {
              Alert.alert("Invalid max—please enter a number");
              return;
            }

            setMax(newMax);
            setCurrent(0);
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderSection onResetPress={resetAll} />

        <CounterSection
          current={current}
          max={max}
          currentStatus={currentStatus}
        />

        <ControlSection
          onEnterPress={increaseCurrent}
          onExitPress={decreaseCurrent}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
