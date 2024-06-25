import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { BearDetails } from "../screens/BearDetails";

type AppRoutesType = {
  home: undefined;
  bearDetails: {
    id: string;
  };
};

export type AppRoutesNavigationProps = NativeStackNavigationProp<AppRoutesType>;

export const AppRoutes = (): JSX.Element => {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesType>();

  return (
    <Navigator>
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="bearDetails"
        component={BearDetails}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
