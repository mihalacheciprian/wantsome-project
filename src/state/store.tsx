import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "./productApiSlice";
import { usersApiSlice } from "./user.Api";

export const store = configureStore({
  reducer: {
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApiSlice.middleware)
      .concat(usersApiSlice.middleware),
});
