import { createStackNavigator, createAppContainer } from "react-navigation";
import { stackConfig, routeConfig } from "./navigator-config";

const RootStack = createStackNavigator(routeConfig, stackConfig);

export const AppContainer = createAppContainer(RootStack);
