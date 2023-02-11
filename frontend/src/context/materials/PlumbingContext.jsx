import { createContext, useState, useReducer } from "react";
import plumbingReducer from "./PlumbingReducer";

const PlumbingContext = createContext();

const PLUMBING_URL = import.meta.env.VITE_REACT_APP_PLUMBING_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
console.log(PLUMBING_URL);

export const PlumbingProvider = ({ children }) => {
  const initialState = {
    brands: [],
    brand: "",
    elements: [],
    element: "",
    fittingList: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(plumbingReducer, initialState);

  //set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //JUST FOR TESTING
  const getFittingList = async () => {
    try {
      const response = await fetch(
        `/api/plumbing/fitting/pressure_fittings/slon`
      );
      const data = await response.json();

      console.log(data);
      dispatch({
        type: "GET_FITTING_DATA",
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <PlumbingContext.Provider
      value={{
        brands: state.brands,
        brand: state.brand,
        fittingList: state.fittingList,
        elements: state.elements,
        element: state.element,
        loading: state.loading,
        getFittingList,
      }}>
      {children}
    </PlumbingContext.Provider>
  );
};

export default PlumbingContext;
