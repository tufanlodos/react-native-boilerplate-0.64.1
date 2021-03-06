import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabBarComponent from "./components/main-tab-bar/index";
import Stack1 from "../features/stack1/Stack1";
import Stack2 from "../features/stack2/Stack2";
import Stack3 from "../features/stack3/Stack3";
import Stack4 from "../features/stack4/Stack4";
import { Context as AppConfigContext } from "../context/AppConfigContext";
import { Context as AccountContext } from "../context/AccountContext";
import ROUTE_NAMES from "./config/route-names";
import Styles from "../config/styles";
import Colors from "../assets/data/color-list.json";

const Main = createBottomTabNavigator();
const MainTab = () => {
  const appConfigContext = useContext(AppConfigContext);
  const accountContext = useContext(AccountContext);

  useEffect(() => {
    if (accountContext.state.ready === false) {
      accountContext.setAccount();
    } else if (accountContext.state.ready === true && appConfigContext.state.ready === false) {
      appConfigContext.setReady();
    }
  }, [appConfigContext.state.ready, accountContext.state.ready]);

  return appConfigContext.state.ready ? (
    <Main.Navigator
      initialRouteName={ROUTE_NAMES.STACK_1}
      // eslint-disable-next-line react/jsx-props-no-spreading
      tabBar={(props) => <MainTabBarComponent {...props} />}
    >
      <Main.Screen
        name={ROUTE_NAMES.STACK_1}
        options={{
          title: appConfigContext.state.texts.TabBarTexts.Stack1,
          unmountOnBlur: false
        }}
        component={Stack1}
      />
      <Main.Screen
        name={ROUTE_NAMES.STACK_2}
        options={{
          title: appConfigContext.state.texts.TabBarTexts.Stack2,
          unmountOnBlur: true
        }}
        component={Stack2}
      />
      <Main.Screen
        name={ROUTE_NAMES.STACK_3}
        options={{
          title: appConfigContext.state.texts.TabBarTexts.Stack3,
          unmountOnBlur: true
        }}
        component={Stack3}
      />
      <Main.Screen
        name={ROUTE_NAMES.STACK_4}
        options={{
          title: appConfigContext.state.texts.TabBarTexts.Stack4,
          unmountOnBlur: true
        }}
        component={Stack4}
      />
    </Main.Navigator>
  ) : (
    <View style={[Styles.f1, Styles.fajCenterItem]}>
      <ActivityIndicator color={Colors.primary} />
    </View>
  );
};

export default MainTab;
