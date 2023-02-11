const plumbingReducer = (state, action) => {
  switch (action.type) {
    case "GET_FITTING_DATA":
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
