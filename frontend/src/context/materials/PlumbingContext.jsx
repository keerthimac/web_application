import axios from "axios";
import { createContext, useState, useReducer } from "react";
import plumbingReducer from "./PlumbingReducer";

const PlumbingContext = createContext();

const PLUMBING_URL = import.meta.env.VITE_REACT_APP_PLUMBING_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const PlumbingProvider = ({ children }) => {
  const initialState = {
    brands: [],
    brand: "",
    elements: [],
    element: "",
    fittingPriceList: [],
    fittingList: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(plumbingReducer, initialState);

  //set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //JUST FOR TESTING
  const getFittingPriceList = async (fittingTypeId, brandId) => {
    try {
      const response = await fetch(
        `/api/plumbing/fitting/${fittingTypeId}/${brandId}`
      );
      const data = await response.json();
      // console.log(data);

      dispatch({
        type: "SET_FITTING_PRICE_DATA",
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const getFittingList = async (fittingTypeId) => {
    try {
      const response = await axios.get(
        `/api/plumbing/fitting/${fittingTypeId}`
      );
      // const data = await response.json();

      console.log(response);
      dispatch({
        type: "SET_FITTING_DATA",
        payload: response.data,
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
        fittingPriceList: state.fittingPriceList,
        elements: state.elements,
        element: state.element,
        loading: state.loading,
        getFittingPriceList,
        getFittingList,
      }}>
      {children}
    </PlumbingContext.Provider>
  );
};

export default PlumbingContext;
