import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../features/auth/screens/login/index";
import { Context as AppConfigContext } from "../context/AppConfigContext";
import RouteNames from "./config/route-names";
import Styles from "../config/styles";

const Auth = createStackNavigator();

const AuthStack = () => {
  const appConfigContext = useContext(AppConfigContext);

  useEffect(() => {
    if (appConfigContext.state.ready === false) {
      appConfigContext.setReady();
    }
  }, [appConfigContext.state.ready]);

  return appConfigContext.state.ready ? (
    <Auth.Navigator
      initialRouteName={RouteNames.LOGIN_SCREEN}
      screenOptions={{ animationEnabled: true }}
      headerMode="none"
    >
      <Auth.Screen name={RouteNames.LOGIN_SCREEN} component={LoginScreen} />
    </Auth.Navigator>
  ) : (
    <View style={[Styles.f1, Styles.fajCenterItem]}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthStack;
