import { View } from "react-native";

import HeaderSection from "./HeaderSection";
import CounterSection from "./CounterSection";
import ControlSection from "./ControlSection";

const HomeScreen = () => (
  <View>
    <HeaderSection />
    <CounterSection />
    <ControlSection />
  </View>
);

export default HomeScreen;
