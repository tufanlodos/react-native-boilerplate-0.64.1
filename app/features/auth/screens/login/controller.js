import { ENV } from "../../../../config/configurations";
import { storeStorageData } from "../../../../lib/storage-operations";
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

const handleLoginSubmit = async (navigation) => {
  await storeStorageData(ENV.STORAGE_ACCOUNT_KEY_NAME, "USER");
  navigation.replace(RouteNames.MAIN_TAB);
};

export { initialState, reducer, handleLoginSubmit };
