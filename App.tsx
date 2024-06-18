import { useState } from 'react';
import { StatusBar, Platform , Dimensions} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
// import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { useFonts} from 'expo-font';

import { TamaguiProvider, YStack, XStack, Theme , Button } from "tamagui";
import tamaguiConfig from "./tamagui.config";


import { Bear } from "./src/components/Bear";
import { ChangeTheme } from "./src/components/ChangeTheme";
import { ButtonsGroup } from "./src/components/ButtonsGroup";



export default function App() {
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);

  const fontsLoaded = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  
  // const [fontsLoaded, fontError ] = useFonts({
  //   Montserrat_400Regular,
  //   Montserrat_600SemiBold,
  //   Montserrat_700Bold
  // });

  if (!fontsLoaded) {
    console.log(fontsLoaded)
   return null
  }

  const windowWidth = Dimensions.get("window").width;

  return (
    <TamaguiProvider config={tamaguiConfig}>
    
      <Theme name={isDarkTheme ? 'dark': 'light'}>
        <StatusBar
          barStyle={isDarkTheme ? 'light-content': 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <YStack
        bg='$gray4'
          flex={1}
          paddingTop={Platform.OS === "ios" ? getStatusBarHeight() : 40}
          ai="center"
        >
          <YStack ai="center" w={Platform.OS === 'ios'? windowWidth - 170 : windowWidth - 150 } jc='center'>
            <XStack>
              <ChangeTheme onCheckedChange={setIsDarkTheme} />

            </XStack>

            <ButtonsGroup/>

            <Bear />

          </YStack>
        </YStack>
      </Theme>
  
    </TamaguiProvider>
  );
}
