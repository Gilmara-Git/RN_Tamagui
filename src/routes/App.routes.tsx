import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { BearDetails } from "../screens/BearDetails";
import { StepBack } from "@tamagui/lucide-icons";
import { useNavigation } from "@react-navigation/native";
import { useThemeStore } from "../store/themeZustandStore";

type AppRoutesType = {
  home: undefined;
  bearDetails: {
    id: string;
  };
};

export type AppRoutesNavigationProps = NativeStackNavigationProp<AppRoutesType>;

export const AppRoutes = (): JSX.Element => {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesType>();
  const navigate = useNavigation();
  const darkTheme = useThemeStore((state) => state.isDarkTheme);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen
        name="bearDetails"
        component={BearDetails}
        options={{
          headerShown: true,
          title: "Details",
          headerLeft: () => (
            <StepBack
              color={darkTheme ? "#000000" : "#CECECE"}
              size="$1"
              onPress={() => navigate.goBack()}
            />
          ),
          headerStyle: { backgroundColor: "#e5484d" },
          headerTintColor: darkTheme ? "#000000" : "#CECECE",
          headerTransparent: true,
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
};
