import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Users {
    id: number;
    firstName: string;
    lastName: string;
    age:number;
}
export const userApiSlice = createApi({
  reducerPath: 'Users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users/add',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation: registerUser } = userApiSlice;