import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductResponse {
  products: ProductInterface[];
  total: number;
  limit: number;
  skip: number;
}

export interface ProductInterface {
  id: number;
  images: string[];
  title: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

interface QueryString {
  limit: number;
  skip: number;
}

export const productApiSlice = createApi({
  reducerPath: "Products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),

  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, QueryString>({
      query: ({ limit = 12, skip = 0 }) => ({ url: `?limit=${limit}&skip=${skip}` }),
    }),
  }),
});

export const { useGetProductsQuery: getProducts } = productApiSlice;
