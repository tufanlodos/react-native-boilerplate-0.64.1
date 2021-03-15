import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./AuthStack";
import MainTab from "./MainTab";
import { navigationRef } from "./modules/RootNavigation";
import { Provider as AppOrientationProvider } from "../context/AppOrientationContext";
import { Provider as ApiResponseProvider } from "../context/ApiResponseContext";
import { Provider as AppConfigProvider } from "../context/AppConfigContext";
import { Provider as AccountProvider } from "../context/AccountContext";
import ErrorBoundary from "../components/error-boundary/index";
import { getStorageData } from "../lib/storage-operations";
import useScreenDimensions from "../lib/orientation";
import { ENV } from "../config/configurations";
import RouteNames from "./config/route-names";
import Styles from "../config/styles";
import Colors from "../assets/data/color-list";

const RootStack = createStackNavigator();

const App = () => {
  const [initializeState, setInitializeState] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState(RouteNames.AUTH_STACK);
  const orientation = useScreenDimensions();

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.brighter
    }
  };

  useEffect(() => {
    checkAccountAndInit();
  }, []);

  const checkAccountAndInit = async () => {
    // account context is not available here (because its provider is in this file)
    const userData = await getStorageData(ENV.STORAGE_ACCOUNT_KEY_NAME);

    if (userData) {
      setInitialRouteName(RouteNames.MAIN_TAB);
    } else {
      setInitialRouteName(RouteNames.AUTH_STACK);
    }

    setInitializeState(false);
  };

  if (initializeState) {
    return (
      <View style={[Styles.f1, Styles.fajCenterItem]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <RootSiblingParent>
        <ApiResponseProvider>
          <AppOrientationProvider value={{ orientation }}>
            <AccountProvider>
              <AppConfigProvider>
                <SafeAreaProvider>
                  <NavigationContainer ref={navigationRef} theme={AppTheme}>
                    <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
                    <RootStack.Navigator initialRouteName={initialRouteName} headerMode="none">
                      <RootStack.Screen name={RouteNames.AUTH_STACK} component={AuthStack} />
                      <RootStack.Screen name={RouteNames.MAIN_TAB} component={MainTab} />
                    </RootStack.Navigator>
                  </NavigationContainer>
                </SafeAreaProvider>
              </AppConfigProvider>
            </AccountProvider>
          </AppOrientationProvider>
        </ApiResponseProvider>
      </RootSiblingParent>
    </ErrorBoundary>
  );
};

export default App;