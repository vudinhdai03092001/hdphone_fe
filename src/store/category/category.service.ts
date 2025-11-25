import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/configApi";
import {
  ICategoryPaginate,
  ICategory,
  ICategoryClient,
} from "./category.interface";
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }), // Backend API
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<
      ICategoryPaginate,
      { page: number; searchName: string }
    >({
      query: ({ page, searchName }) =>
        `/api/category/get-all-categories?page=${page ? page : 1}&search=${
          searchName ? searchName : ""
        }`,
      providesTags: ["Category"],
    }),
    getCategoriesActive: builder.query<ICategoryClient, void>({
      query: () => `/api/category/get-categories-active`,
      providesTags: ["Category"],
    }),
    addCategory: builder.mutation<ICategory[], FormData>({
      query: (formData) => ({
        url: "/api/category/create-category",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<ICategory[], FormData>({
      query: (data) => ({
        url: `/api/category/update-category`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation<ICategory[], number>({
      query: (id) => ({
        url: `/api/category/${id}/remove-category`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useLazyGetCategoriesQuery,
  useGetCategoriesActiveQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
