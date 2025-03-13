import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserResponse {
  products: UserInterface[];
  total: number;
  limit: number;
  skip: number;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: UserHair
  address: UserAddress;
  university: string;
  bank:  UserBankInformation ;
  company: { name: string; department: string; title: string };
}

export interface UserHair{
    color: string;
     type: string
}

export interface UserAddress{
    address: string; 
    city: string; 
    state: string
}

export interface UserBankInformation{
    cardNumber: string; 
    iban: string;
     currency: string
}

export interface UsercompanyInformation{
    name: string;
    department: string;
    title: string
}

interface QueryString {
  limit: number;
  skip: number;
  userId:number;
}

export const usersApiSlice = createApi({
  reducerPath: "Users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),

  endpoints: (builder) => ({
    getProducts: builder.query<UserResponse, QueryString>({
      query: ({userId, limit = 12, skip = 0 }) => ({ url: `/${userId}?limit=${limit}&skip=${skip}` }),
    }),
  }),
});

export const { useGetProductsQuery: getProducts } = usersApiSlice;
