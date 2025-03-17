import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "./productApiSlice";
import { userApiSlice } from "./UserApiSlice";

export const store = configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApiSlice.middleware).concat(userApiSlice.middleware),
});
