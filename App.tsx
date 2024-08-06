import { StatusBar } from "react-native";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";


import { TamaguiProvider, Theme } from "tamagui";
import tamaguiConfig from "./tamagui.config";

import { Routes } from "./src/routes";

import { useThemeStore } from "./src/store/themeZustandStore";

export default function App() {
  const darkTheme = useThemeStore((state) => state.isDarkTheme);

  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={darkTheme ? "dark" : "light"}>
        <StatusBar
          barStyle={darkTheme ? "light-content" : "dark-content"}
          backgroundColor="transparent"
          translucent
        />

        <Routes />
      </Theme>
    </TamaguiProvider>
  );
}
