/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (credentials) =>
        ({
          url: "/auth/login",
          method: "POST",
          body: { ...credentials },
        } as any),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
