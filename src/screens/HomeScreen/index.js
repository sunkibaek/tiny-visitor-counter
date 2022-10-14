import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderSection from "./HeaderSection";
import CounterSection from "./CounterSection";
import ControlSection from "./ControlSection";
import { DEFAULTS, getCurrentStatus } from "../../models/Counter";

const styles = StyleSheet.create({
  safeArea: {
    paddingVertical: 16,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
  },
});

const HomeScreen = () => {
  const [max, setMax] = useState(DEFAULTS.max);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    AsyncStorage.setItem("max", max.toString());
  }, [max, isLoading]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    AsyncStorage.setItem("current", current.toString());
  }, [current, isLoading]);

  useEffect(() => {
    const load = async () => {
      const maxString = await AsyncStorage.getItem("max");
      const currentString = await AsyncStorage.getItem("current");

      if (!maxString || !currentString) {
        return;
      }

      setMax(parseInt(maxString));
      setCurrent(parseInt(currentString));
      setIsLoading(false);
    };

    load();
  }, []);

  const increaseCurrent = () => {
    setCurrent((prev) => {
      const newCurrent = prev + 1;

      if (newCurrent > DEFAULTS.limit) {
        return prev;
      }

      return newCurrent;
    });
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
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderSection onResetPress={resetAll} />

        {isLoading ? (
          <ActivityIndicator size="large" style={styles.activityIndicator} />
        ) : (
          <CounterSection
            current={current}
            max={max}
            currentStatus={getCurrentStatus(current, max)}
          />
        )}

        <ControlSection
          onEnterPress={increaseCurrent}
          onExitPress={decreaseCurrent}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
