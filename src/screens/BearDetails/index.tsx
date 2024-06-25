import { Alert } from "react-native";
import { YStack, Text, useCurrentColor } from "tamagui";
import { useBearStore } from "../../store/zustand.store";
import { useRoute, useNavigation } from "@react-navigation/native";

type BearDetailsParams = {
  id: string;
};

export const BearDetails = () => {
  const { params } = useRoute();
  const { id } = params as BearDetailsParams;
  const navigation = useNavigation();

  const bearsList = useBearStore((state) => state.bearsSelection);
  const selectedBear = bearsList.find((bear) => bear.id === id);

  console.log(id, selectedBear);

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

  return (
    <YStack bg="$red9" ai="center" jc="center" flex={1}>
      <Text>{selectedBear.signature}</Text>
    </YStack>
  );
};
