import { XStack, Switch, SwitchProps } from "tamagui";
import { Moon, Sun } from "@tamagui/lucide-icons";

export const ChangeTheme = ({ ...rest }: SwitchProps) => {
  return (
    <XStack ai="center" gap="$3">
      <Sun size="$2" />
      <Switch size="$2" native="mobile" {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  );
};
