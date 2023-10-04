import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import smallMenuSlice from "./reducers/smallMenuSlice";
export default configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		smallMenuSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	// devTools: false,
});
