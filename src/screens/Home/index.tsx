import { YStack, XStack, Text } from "tamagui";
import { FlatList, Platform, Dimensions, Alert } from "react-native";

import { ButtonsGroup } from "../../components/ButtonsGroup";
import { Bear } from "../../components/Bear";
import { useBearStore } from "../../store/zustand.store";

import { randomBears, fetchBears } from "../../services/bearApi";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";

import { useNavigation } from "@react-navigation/native";
import { AppRoutesNavigationProps } from "../../routes/App.routes";
import { ChangeTheme } from "../../components/ChangeTheme";
import { useThemeStore } from "../../store/themeZustandStore";

export const Home = () => {
  const windowWidth = Dimensions.get("window").width;
  const bearsList = useBearStore((state) => state.bearsSelection);
  const addBear = useBearStore((state) => state.addBear);
  const removeBear = useBearStore((state) => state.removeBear);
  const navigation = useNavigation<AppRoutesNavigationProps>();

  const updateTheme = useThemeStore((state) => state.updateTheme);

  const handleNavigate = (id: string) => {
    navigation.navigate("bearDetails", { id });
  };
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

          if (bearExist === undefined) {
            addBear(response);
          } else {
            Alert.alert("Bear not added", "Try again, you add up to 8 bears!");
          }
        }

        if (bearsList.length === 8) {
          return Alert.alert("No more bears allowed", "Start removing them!");
        }
      }

      if (action === "remove") {
        if (bearsList.length === 0) {
          return Alert.alert("There is no bear to remove", "Add a bear first");
        }

        const randomIndex = Math.ceil(Math.random() * bearsList.length);
        const id =
          bearsList.length === 1
            ? bearsList[0].id
            : bearsList[randomIndex - 1].id;

        removeBear(id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
        <XStack
          bg="$gray4"
          paddingTop={Platform.OS === "ios" ? getStatusBarHeight() : 40}
          ai="center"
          jc="center"
        >
          <ChangeTheme onCheckedChange={updateTheme} />
        </XStack>

        <ButtonsGroup updateBear={handleBearUpdate} />

        <FlatList
          data={bearsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Bear data={item} onPress={() => handleNavigate(item.id)} />
          )}
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
  );
};
