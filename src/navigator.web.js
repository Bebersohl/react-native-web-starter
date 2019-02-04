import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import { stackConfig, routeConfig } from "./navigator-config";

const RootStack = createSwitchNavigator(routeConfig, stackConfig);

export const AppContainer = createBrowserApp(RootStack);
