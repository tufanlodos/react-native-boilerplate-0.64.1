import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import RouteNames from "../../navigation/config/route-names";
import Stack2Screen from "./screens/main/index";
import Styles from "../../config/styles";

const Stack = createStackNavigator();
const Stack2 = () => (
  <Stack.Navigator
    initialRouteName={RouteNames.STACK_2_MAIN}
    screenOptions={{
      animationEnabled: true,
      headerTitleStyle: Styles.headerTitleStyle,
      headerStyle: Styles.headerContainerStyle,
      headerTitle: "",
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerBackImage: () => (
        <Icon
          name="arrow-left"
          size={24}
          style={Platform.OS === "ios" ? Styles.ml20 : Styles.ml10}
        />
      )
    }}
  >
    <Stack.Screen name={RouteNames.STACK_2_MAIN} component={Stack2Screen} />
  </Stack.Navigator>
);

export default Stack2;
