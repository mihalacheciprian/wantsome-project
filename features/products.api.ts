import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductsInterface{
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number
    tags:any[];
    category:string;
    rating:number;
    stock: number;
    brand:string;
    sku:string;
    weight:number;
    dimensions:any[];
    warrantyInformation:string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:ProductReviews;
    images:any[];
} 

export interface ProductReviews{
  rating:number;
  commen:string;
  date:string;
  reviewerName:string;
  reviewrEmail:string;
}

export interface ProductsResponse{
  length: number;
  total: number;
  products:ProductsInterface[]
}
namespace ProductsPayload {
    export interface Get {
      limit?: number;
      skip?: number;
    }
  }

  export const productsApiSlice = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
    endpoints: (builder) => ({
      GetProducts: builder.query<ProductsResponse, ProductsPayload.Get>({
        query: ({ limit = 10, skip = 1 }) => `?limit=${limit}&skip=${skip}`,
      }),
    }),
  });
  
  export const { useGetProductsQuery: getProducts } = productsApiSlice;