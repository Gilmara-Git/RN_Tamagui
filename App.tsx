import { useState } from "react";
import { FlatList } from "react-native";
import { StatusBar, Platform, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
// import { useFonts } from "expo-font";

import { TamaguiProvider, YStack, XStack, Theme, Text, } from "tamagui";
import tamaguiConfig from "./tamagui.config";

import { Bear } from "./src/components/Bear";
import { ChangeTheme } from "./src/components/ChangeTheme";
import { ButtonsGroup } from "./src/components/ButtonsGroup";

import { useBearStore } from "./src/store/zustand.store";
import { randomBears, fetchBears } from "./src/services/bearApi";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const bearsList = useBearStore((state) => state.bearsSelection);
  const addBear = useBearStore((state) => state.addBear);
  const removeBear = useBearStore((state) => state.removeBear);

  // const fontsLoaded = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });

  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded && fontError) {
    return null;
  }

  // if (!fontsLoaded) {
  //   console.log(fontsLoaded);
  //   return null;
  // }

  const windowWidth = Dimensions.get("window").width;

  const handleBearUpdate = async (action: string) => {
    try {
      if (action === "add") {
        if (bearsList.length === 0) {
          addBear(randomBears[0]);
        }

        if (bearsList.length > 0) {
          // mocking api call
          await new Promise((resolve) => setTimeout(resolve, 500));

          const response = fetchBears();

          const bearExist = bearsList.find((bear) => bear.id === response.id);
          console.log(bearExist === undefined, "bear Exist");

          if (bearExist === undefined) {
            addBear(response);
          }
        }
      }

      if (action === "remove") {
        const randomIndex = Math.ceil(Math.random() * bearsList.length);
        const id =
          bearsList.length === 1
            ? bearsList[0].id
            : bearsList[randomIndex - 1].id;
        console.log(id);
        removeBear(id);
      }
    } catch (e) {
      console.log(e);
    }
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
            w={Platform.OS === "ios" ? windowWidth - 170 : windowWidth - 130}
            jc="center"
          >
            <XStack>
              <ChangeTheme onCheckedChange={setIsDarkTheme} />
            </XStack>

            <ButtonsGroup updateBear={handleBearUpdate} />

            <FlatList
              data={bearsList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Bear data={item} />}
              contentContainerStyle={{ paddingBottom: 200 }}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <XStack ai="center" jc="center" mt={50}>
                  <Text fontFamily="$body" fontSize={16}>
                    Start adding Bear Components!!
                  </Text>
                </XStack>
              )}
            />
          </YStack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
