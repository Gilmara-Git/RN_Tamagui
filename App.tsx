import { useState } from "react";
import { StatusBar, Platform, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
// import { useFonts } from "expo-font";

import { TamaguiProvider, YStack, XStack, Theme, Text } from "tamagui";
import tamaguiConfig from "./tamagui.config";

import { Bear } from "./src/components/Bear";
import { ChangeTheme } from "./src/components/ChangeTheme";
import { ButtonsGroup } from "./src/components/ButtonsGroup";

import { useCountBearsStore } from './src/store/zustand.store';
 
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
 
  const count =  useCountBearsStore((state)=> state.countBears);
  const incrementBears =   useCountBearsStore((state)=> state.addBear)
  const decrementBears =   useCountBearsStore((state)=> state.removeBear)

  // const fontsLoaded = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });

  const [fontsLoaded, fontError ] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if(!fontsLoaded && fontError){
    return null;
  }

  // if (!fontsLoaded) {
  //   console.log(fontsLoaded);
  //   return null;
  // }

  const windowWidth = Dimensions.get("window").width;

  const handleBearUpdate = (action: string) => {
    action === 'add' ? incrementBears() : decrementBears();
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={isDarkTheme ? "dark" : "light"}>
        <StatusBar
          barStyle={isDarkTheme ? "light-content" : "dark-content"}
          backgroundColor="transparent"
          translucent
        />
        <YStack
          bg="$gray4"
          flex={1}
          paddingTop={Platform.OS === "ios" ? getStatusBarHeight() : 40}
          ai="center"
        >
          <YStack
            ai="center"
            w={Platform.OS === "ios" ? windowWidth - 170 : windowWidth - 150}
            jc="center"
          >
            <XStack>
              <ChangeTheme onCheckedChange={setIsDarkTheme} />
            </XStack>

            <ButtonsGroup updateBear={handleBearUpdate} />

            <Bear />

            <Text>{count}</Text>
          </YStack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
