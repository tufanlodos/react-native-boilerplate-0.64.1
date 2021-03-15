/* eslint-disable no-nested-ternary */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import RouteNames from "../../config/route-names";
import { ENV } from "../../../config/configurations";
import Colors from "../../../assets/data/color-list";
import Styles from "../../../config/styles";
import OwnStyles from "./styles";

const mainTabBarIconSize = ENV.isMobileSize ? 18 : 22;

const MainTabBarComponent = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[
        Styles.fdRow,
        ENV.isMobileSize
          ? ENV.hasNotch
            ? [Styles.pb30, Styles.pt10, Styles.ph0]
            : [Styles.pv15]
          : [Styles.pv15],
        Styles.bgWhite
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            style={[Styles.f1, Styles.fdCol, Styles.algiCenter, Styles.jcCenter]}
            key={route.key}
            onPress={onPress}
            // onLongPress={onLongPress}
          >
            <View style={[Styles.fdCol, Styles.jcCenter, Styles.algiCenter, OwnStyles.mb3]}>
              {route.name === RouteNames.STACK_1 && (
                <Icon
                  size={mainTabBarIconSize}
                  name="home"
                  color={!isFocused ? Colors.grey : Colors.primary}
                />
              )}
              {route.name === RouteNames.STACK_2 && (
                <Icon
                  size={mainTabBarIconSize}
                  name="search"
                  color={!isFocused ? Colors.grey : Colors.primary}
                />
              )}
              {route.name === RouteNames.STACK_3 && (
                <Icon
                  size={mainTabBarIconSize}
                  name="meh"
                  color={!isFocused ? Colors.grey : Colors.primary}
                />
              )}
              {route.name === RouteNames.STACK_4 && (
                <Icon
                  size={mainTabBarIconSize}
                  name="settings"
                  color={!isFocused ? Colors.grey : Colors.primary}
                />
              )}
            </View>
            <Text
              style={
                isFocused
                  ? [
                      Styles.textPrimary,
                      Styles.fwBold,
                      ENV.isMobileSize ? Styles.fs13 : Styles.fs16
                    ]
                  : [Styles.textGrey, Styles.fwNormal, ENV.isMobileSize ? Styles.fs12 : Styles.fs14]
              }
            >
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainTabBarComponent;
