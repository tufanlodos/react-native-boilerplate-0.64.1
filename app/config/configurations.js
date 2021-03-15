import { Dimensions, PixelRatio } from "react-native";
import { hasNotch } from "react-native-device-info";

const ENV = {
  deviceWidth: Dimensions.get("window").width,
  deviceHeight: Dimensions.get("window").height,
  diagonalScreenSize:
    (Dimensions.get("window").width ** 2 + Dimensions.get("window").height ** 2) ** (1 / 2), // Ekranın çapraz uzunluğu 9.7 inç tablet için 1280 px değerini  iPhone 8 (4.7 inç) için  765 px değerini veriyor.
  mobileBreakPoint: 600, // alcatel 1T 7" width
  isMobileSize:
    (Dimensions.get("window").width * Dimensions.get("window").scale) / PixelRatio.get() < 600,
  hasNotch: hasNotch(),
  CUSTOM_MESSAGES_KEY_NAME: "customMessages",
  STORAGE_ACCOUNT_KEY_NAME: "accountInfo",
  STORAGE_ENV_ITEM: "envItem"
};

// eslint-disable-next-line import/prefer-default-export
export { ENV };
