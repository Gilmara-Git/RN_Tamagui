import { XStack, Switch, SwitchProps } from "tamagui";
import { Moon, Sun } from "@tamagui/lucide-icons";

type theme = SwitchProps &{  
  themeUpdate: ()=>void;
}

export const ChangeTheme = ({ themeUpdate, ...rest }: theme) => {
  return (
    <XStack ai="center" gap="$3">
      <Sun size="$2" />
      <Switch size="$2" native="mobile" onCheckedChange={themeUpdate} {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  );
};

