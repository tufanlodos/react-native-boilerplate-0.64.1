import createDataContext from "./createDataContext";
import { storeStorageData, removeStorageData } from "../lib/storage-operations";
import { ENV } from "../config/configurations";

const initialState = {
  initialized: false,
  account: {}
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "set_account":
      return { ...state, ...action.payload, initialized: true };
    case "clear_account":
      return {};
    default:
      return state;
  }
};

const setAccount = (dispatch) => {
  return async (data, callback) => {
    await storeStorageData(ENV.STORAGE_ACCOUNT_KEY_NAME, data);
    dispatch({ type: "set_account", payload: data });
    if (callback) {
      callback();
    }
  };
};

const clearAccount = (dispatch) => {
  return async (callback) => {
    await removeStorageData(ENV.STORAGE_ACCOUNT_KEY_NAME);
    dispatch({ type: "clear_account" });
    if (callback) {
      callback();
    }
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
