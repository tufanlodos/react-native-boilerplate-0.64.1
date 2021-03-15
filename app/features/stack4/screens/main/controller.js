import { ENV } from "../../../../config/configurations";
import { removeStorageData } from "../../../../lib/storage-operations";
import RouteNames from "../../../../navigation/config/route-names";

const initialState = {
  initialized: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setInitialized":
      return { ...state, initialized: action.payload };
    default:
      return state;
  }
};

const handleLogoutSubmit = async (navigation) => {
  await removeStorageData(ENV.STORAGE_ACCOUNT_KEY_NAME);
  navigation.replace(RouteNames.AUTH_STACK);
};

export { initialState, reducer, handleLogoutSubmit };
