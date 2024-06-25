import { Alert } from "react-native";
import { YStack, Text, Image, Circle, XStack, Button } from "tamagui";
import { useBearStore } from "../../store/zustand.store";
import { useThemeStore } from "../../store/themeZustandStore";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Theme } from "tamagui";
import { Linking } from "react-native";
import { Linkedin } from "@tamagui/lucide-icons";

type BearDetailsParams = {
  id: string;
};

export const BearDetails = () => {
  const { params } = useRoute();
  const { id } = params as BearDetailsParams;
  const navigation = useNavigation();

  const bearsList = useBearStore((state) => state.bearsSelection);
  const selectedBear = bearsList.find((bear) => bear.id === id);

  const darkTheme = useThemeStore((state) => state.isDarkTheme);
  const bearName = selectedBear?.description.split(" ")[3];

  if (selectedBear === undefined) {
    setTimeout(() => {
      Alert.alert(
        "Something went wrong",
        "We could not find a bear this time!",
        [
          {
            text: "Go Back",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    }, 500);

    return;
  }


const navigateLinkedIn = ()=>{

  Linking.openURL('https://www.linkedin.com/in/gilmara-pimentel/')
};

  return (
    <Theme name={darkTheme ? "light" : "dark"}>
      <YStack bg="$red9" ai="center" jc="center" flex={1} gap="$10">
        <Circle size={220} elevation="$4" backgroundColor="$accentColor">
          <Image
            source={{
              uri: selectedBear.imageUrl,
              width: 150,
              height: 150,
            }}
          />
        </Circle>

        <YStack paddingHorizontal={60} jc="center">
          <Text textAlign="center" fontSize="$4">
            Hi, I am {bearName}
          </Text>
          <Text fontSize="$4" textAlign="center">
            {selectedBear.signature}{" "}
          </Text>
        </YStack>
        <Button
          onPress={()=>navigateLinkedIn()}
          backgroundColor="$accentColor"
          pressStyle={{ backgroundColor: darkTheme ? "$blue9" : "$gray8" }}
        >
          <Linkedin size="$3" color={darkTheme ? "white" : "gray"} />
        </Button>
      </YStack>
    </Theme>
  );
};
