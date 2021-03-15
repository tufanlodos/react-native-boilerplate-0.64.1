const initialState = {
  initialized: false,
  refreshing: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setRefresh":
      return { ...state, refreshing: action.payload };
    case "setInitialized":
      return { ...state, initialized: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };
