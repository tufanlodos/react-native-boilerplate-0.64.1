import createDataContext from "./createDataContext";
import * as DefaultTexts from "../../app_texts_default_tr.json";

const initialState = {
  loading: false,
  ready: false,
  texts: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setConfigsAndReady":
      return {
        ...state,
        loading: false,
        ready: true,
        texts: action.payload.texts
      };
    case "setInitialState":
      return initialState;
    default:
      return state;
  }
};

const setReady = (dispatch) => {
  // only triggered from AuthStack and MainTab.
  return async () => {
    dispatch({ type: "setLoading", payload: true });

    const AppTexts = DefaultTexts;

    dispatch({
      type: "setConfigsAndReady",
      payload: {
        texts: AppTexts
      }
    });
  };
};

export const { Context, Provider } = createDataContext(reducer, { setReady }, initialState);
