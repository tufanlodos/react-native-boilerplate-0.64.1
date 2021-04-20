import createDataContext from "./createDataContext";
import { getStorageData, storeStorageData, removeStorageData } from "../lib/storage-operations";
import { ASYNC_STORAGE_KEYS } from "../config/configurations";

const initialState = {
  ready: false,
  data: null // LoginResponseModel
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "set_account":
      return { ...state, data: action.payload, ready: true };
    case "clear_account":
      return initialState;
    default:
      return state;
  }
};

const setAccount = (dispatch) => {
  // only triggered from login-area and mainTab
  return async (data, callback) => {
    let userData;
    if (data) {
      userData = data;
      await storeStorageData(ASYNC_STORAGE_KEYS.LOGIN_RESPONSE_ITEM, userData);
    } else {
      userData = await getStorageData(ASYNC_STORAGE_KEYS.LOGIN_RESPONSE_ITEM);
    }

    dispatch({ type: "set_account", payload: userData });

    callback?.();
  };
};

const clearAccount = (dispatch) => {
  return async (callback) => {
    await removeStorageData(ASYNC_STORAGE_KEYS.LOGIN_RESPONSE_ITEM);
    dispatch({ type: "clear_account" });

    callback?.();
  };
};

export const { Context, Provider } = createDataContext(
  accountReducer,
  {
    setAccount,
    clearAccount
  },
  initialState
);
