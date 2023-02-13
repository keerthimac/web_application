const plumbingReducer = (state, action) => {
  switch (action.type) {
    case "SET_FITTING_PRICE_DATA":
      return {
        ...state,
        fittingPriceList: action.payload,
        loading: false,
      };
    case "SET_FITTING_DATA":
      return {
        ...state,
        fittingList: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default plumbingReducer;
