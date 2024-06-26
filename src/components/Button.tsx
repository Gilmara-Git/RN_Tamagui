import { Button as TamaguiButton, styled } from "tamagui";
import { Search } from "@tamagui/lucide-icons";

export const Button = styled(TamaguiButton, {
  w: "$5",
  h: "$5",
  icon: Search,

  variants: {
    background: {
      normal: {
        bg: "$blue10",
      },
      outline: {
        borderWidth: "$1",
        borderColor: "$blue10",
      },
    },
  } as const,

  defaultVariants: {
    background: "normal",
  },
});
