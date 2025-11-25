import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/configApi";
import { IProduct, IProductPaginate } from "./product.interface";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }), // Backend API
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<
      IProductPaginate,
      { page: number; searchName: string }
    >({
      query: ({ page, searchName }) =>
        `/api/product/get-all-products?page=${page ? page : 1}&search=${
          searchName ? searchName : ""
        }`,
      providesTags: ["Product"],
    }),
    getProductsActive: builder.query<IProduct, void>({
      query: () => `/api/product/get-product-active`,
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation<IProduct[], FormData>({
      query: (formData) => ({
        url: "/api/product/create-product",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<IProduct[], FormData>({
      query: (formData) => ({
        url: `/api/product/update-product`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<IProduct[], number>({
      query: (id) => ({
        url: `/api/product/${id}/remove-category`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useGetProductsActiveQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
