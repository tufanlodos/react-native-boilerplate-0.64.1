import { Dimensions, PixelRatio } from "react-native";
import { hasNotch } from "react-native-device-info";

const ENV = {
  deviceWidth: Dimensions.get("window").width,
  deviceHeight: Dimensions.get("window").height,
  diagonalScreenSize:
    (Dimensions.get("window").width ** 2 + Dimensions.get("window").height ** 2) ** (1 / 2),
  mobileBreakPoint: 600, // alcatel 1T 7" width
  isMobileSize:
    (Dimensions.get("window").width * Dimensions.get("window").scale) / PixelRatio.get() < 600,
  hasNotch: hasNotch(),
  STORAGE_ACCOUNT_KEY_NAME: "accountInfo"
};

// eslint-disable-next-line import/prefer-default-export
export { ENV };
