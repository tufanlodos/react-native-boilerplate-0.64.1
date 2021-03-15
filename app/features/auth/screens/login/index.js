import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../../../../config/styles";
import * as Controller from "./controller";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.f1}>
      <Button title="Login" onPress={() => Controller.handleLoginSubmit(navigation)} />
    </SafeAreaView>
  );
};

export default LoginScreen;
