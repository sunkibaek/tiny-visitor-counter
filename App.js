import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/HomeScreen";

import Storybook from "./storybook";

function App() {
  return (
    <>
      <StatusBar style="auto" />

      <Home />
    </>
  );
}

// export default App;
export default Storybook;
