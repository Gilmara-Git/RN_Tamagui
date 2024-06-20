import { XStack, Avatar, YStack, Separator, Paragraph } from "tamagui";
import { BearType } from "../store/zustand.store";

type TBear = {
  data: BearType;
};

export const Bear = ({ data }: TBear): JSX.Element => {
  return (
    <YStack ai="center" jc="center" mt={20}>
      <Avatar circular size="$6" zIndex={1}>
        <Avatar.Image accessibilityLabel="Nate Wienert" src={data.imageUrl} />
        <Avatar.Fallback delayMs={600} backgroundColor="$gray8" />
      </Avatar>
      <XStack mt={-30} jc="center" ai="center">
        <YStack jc="center" gap="$1" bg="$red9" borderRadius={8} p={6}>
          <Paragraph
            color="$gray3"
            fontSize={"$3"}
            fontFamily={"$body"}
            // fontWeight={'700'}
            textAlign="center"
            paddingTop={25}
          >
            {data.description}
          </Paragraph>
          <Separator marginVertical={5} />

          <Paragraph
            color="$gray3"
            fontSize={"$3"}
            fontFamily={"$heading"}
            // fontWeight={'400'}
            textAlign="center"
          >
            {data.signature}
          </Paragraph>
        </YStack>
      </XStack>
    </YStack>
  );
};
