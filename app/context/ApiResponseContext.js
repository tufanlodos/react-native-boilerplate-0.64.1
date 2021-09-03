import Toast from "react-native-root-toast";
import { Platform } from "react-native";
import createDataContext from "./createDataContext";
import Enums from "../assets/data/enums.json";
import Colors from "../assets/data/color-list.json";
import { ENV } from "../config/configurations";

const initialState = {
  show: false,
  message: "",
  type: null // from Enums.ApiResponseContextTypes
};

const apiResponseReducer = (state, action) => {
  switch (action.type) {
    case "set_error":
      return action.payload;
    case "set_success":
      return action.payload;
    case "set_warning":
      return action.payload;
    case "reset_context":
      return initialState;
    default:
      return state;
  }
};

const setError = (dispatch) => {
  return (_data, callback) => {
    const data = { ..._data };
    if (typeof data.message !== "string") {
      data.message = "";
    }

    dispatch({
      type: "set_error",
      payload: { ...data, type: Enums.ApiResponseContextTypes.Error }
    });

    if (data.show) {
      Toast.show(data.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        containerStyle: {
          position: "absolute",
          left: Platform.OS === "ios" ? -60 : -50,
          right: Platform.OS === "ios" ? -60 : -50,
          // eslint-disable-next-line no-nested-ternary
          top: Platform.OS === "ios" && ENV.hasNotch ? -20 : Platform.OS === "android" ? -10 : 0,
          paddingVertical: Platform.OS === "ios" && ENV.hasNotch ? 40 : 10,
          paddingHorizontal: Platform.OS === "ios" && ENV.isMobileSize ? 40 : 10
        },
        shadow: true,
        backgroundColor: Colors.red,
        opacity: 1,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onHidden: () => {
          // calls on toast\`s hide animation end.
          resetContext();
        }
      });
    }

    if (callback) {
      callback();
    }
  };
};

const setSuccess = (dispatch) => {
  return (_data, callback) => {
    const data = { ..._data };
    if (typeof data.message !== "string") {
      data.message = "";
    }

    dispatch({
      type: "set_success",
      payload: { ...data, type: Enums.ApiResponseContextTypes.Success }
    });

    if (data.show) {
      Toast.show(data.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        containerStyle: {
          position: "absolute",
          left: Platform.OS === "ios" ? -60 : -50,
          right: Platform.OS === "ios" ? -60 : -50,
          // eslint-disable-next-line no-nested-ternary
          top: Platform.OS === "ios" && ENV.hasNotch ? -20 : Platform.OS === "android" ? -10 : 0,
          paddingVertical: Platform.OS === "ios" && ENV.hasNotch ? 40 : 10,
          paddingHorizontal: Platform.OS === "ios" && ENV.isMobileSize ? 40 : 10
        },
        shadow: true,
        backgroundColor: Colors.green,
        opacity: 1,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onHidden: () => {
          // calls on toast\`s hide animation end.
          resetContext();
        }
      });
    }

    if (callback) {
      callback();
    }
  };
};

const setWarning = (dispatch) => {
  return (_data, callback) => {
    const data = { ..._data };
    if (typeof data.message !== "string") {
      data.message = "";
    }

    dispatch({
      type: "set_warning",
      payload: { ...data, type: Enums.ApiResponseContextTypes.Warning }
    });

    if (data.show) {
      Toast.show(data.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        containerStyle: {
          position: "absolute",
          left: Platform.OS === "ios" ? -60 : -50,
          right: Platform.OS === "ios" ? -60 : -50,
          // eslint-disable-next-line no-nested-ternary
          top: Platform.OS === "ios" && ENV.hasNotch ? -20 : Platform.OS === "android" ? -10 : 0,
          paddingVertical: Platform.OS === "ios" && ENV.hasNotch ? 40 : 10,
          paddingHorizontal: Platform.OS === "ios" && ENV.isMobileSize ? 40 : 10
        },
        shadow: true,
        backgroundColor: Colors.yellowDark,
        opacity: 1,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onHidden: () => {
          // calls on toast\`s hide animation end.
          resetContext();
        }
      });
    }

    if (callback) {
      callback();
    }
  };
};
const resetContext = (dispatch) => {
  return (callback) => {
    dispatch({ type: "reset_context" });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  apiResponseReducer,
  { setSuccess, setError, setWarning, resetContext },
  initialState
);
