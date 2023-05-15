// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import subContractService from "./subContractService";

// const initialState = {
//   brands: [],
//   brand: "",
//   elements: [],
//   element: "",
//   fittingPriceList: [],
//   fittingList: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// //Get Brand List
// export const getBrandList = createAsyncThunk(
//   "plumbing/getBrandList",
//   async (_, thunkAPI) => {
//     try {
//       return await plumbingService.getBrandList();
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// //Get Brand Elements List
// export const getBrandElementList = createAsyncThunk(
//   "plumbing/getBrandEleList",
//   async ({ plumType, brandId }, thunkAPI) => {
//     try {
//       return await plumbingService.getBrandElementList(plumType, brandId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// //Get Fitting List
// export const getFittingList = createAsyncThunk(
//   "plumbing/getFittingList",
//   async (fittingTypeId, thunkAPI) => {
//     try {
//       return await plumbingService.getFittingList(fittingTypeId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// //Get Fitting Price List
// export const getFittingPriceList = createAsyncThunk(
//   "plumbing/getFittingPriceList",
//   async ({ fittingTypeId, brandId }, thunkAPI) => {
//     try {
//       return await plumbingService.getFittingPriceList(fittingTypeId, brandId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const plumbingSlice = createSlice({
//   name: "plumbing",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isError = false;
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     //Get Brand List
//     builder.addCase(getBrandList.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getBrandList.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isSuccess = true;
//       state.message = "Brands Data Fetched Successfully";
//       state.brands = action.payload;
//     });
//     builder.addCase(getBrandList.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//       state.message = action.payload;
//     });

//     //Get Element List
//     builder.addCase(getBrandElementList.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getBrandElementList.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isSuccess = true;
//       state.message = "Elements Data Fetched Successfully";
//       state.elements = action.payload;
//     });
//     builder.addCase(getBrandElementList.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//       state.message = action.payload;
//     });

//     //Get Fitting List
//     builder.addCase(getFittingList.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getFittingList.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isSuccess = true;
//       state.message = "Fitting Data Fetched Successfully";
//       state.fittingList = action.payload;
//     });
//     builder.addCase(getFittingList.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//       state.message = action.payload;
//     });
//     // Get Fitting Price List
//     builder.addCase(getFittingPriceList.pending, (state) => {
//       state.isLoading = true;
//       state.message = "please Wait";
//     });
//     builder.addCase(getFittingPriceList.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isSuccess = true;
//       state.message = "Fitting Data Fetched Successfully";
//       state.fittingPriceList = action.payload;
//     });
//     builder.addCase(getFittingPriceList.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = true;
//       state.message = action.payload;
//     });
//   },
// });

// // Action creators are generated for each case reducer function
// export const { reset } = plumbingSlice.actions;

// export default plumbingSlice.reducer;
