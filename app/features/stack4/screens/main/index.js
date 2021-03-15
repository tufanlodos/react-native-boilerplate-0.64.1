import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Controller from "./controller";
import Styles from "../../../../config/styles";

const Stack4Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.f1}>
      <Button title="Logout" onPress={() => Controller.handleLogoutSubmit(navigation)} />
    </SafeAreaView>
  );
};

export default Stack4Screen;
