import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import ROUTE_NAMES from "../../navigation/config/route-names";
import Stack4Screen from "./screens/main/index";
import Styles from "../../config/styles";

const Stack = createStackNavigator();
const Stack4 = () => (
  <Stack.Navigator
    initialRouteName={ROUTE_NAMES.STACK_4_MAIN}
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
    <Stack.Screen name={ROUTE_NAMES.STACK_4_MAIN} component={Stack4Screen} />
  </Stack.Navigator>
);

export default Stack4;
