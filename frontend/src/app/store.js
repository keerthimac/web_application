import { configureStore } from "@reduxjs/toolkit";
import plumbingReducer from "../features/materials/plumbing/plumbingSlice";

export default configureStore({
  reducer: {
    plumbing: plumbingReducer,
  },
});
