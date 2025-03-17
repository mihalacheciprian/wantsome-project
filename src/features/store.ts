import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { apiSlice } from "../api/apiSlice";
import { productApiSlice } from "./productApiSlice";
import { usersApiSlice } from "./user.api";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware)
    .concat(productApiSlice.middleware)
    .concat(usersApiSlice.middleware)

  },
});

