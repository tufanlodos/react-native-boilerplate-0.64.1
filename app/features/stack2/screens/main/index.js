import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "../../../../config/styles";

const Stack2Screen = () => {
  return (
    <SafeAreaView style={Styles.f1}>
      <Text>Stack 2 Main Screen</Text>
    </SafeAreaView>
  );
};

export default Stack2Screen;
