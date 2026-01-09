import { api } from "./index";

export const brandApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBrands: build.query({
      query: (params) => ({
        url: "/brands",
        params,
      }),
      providesTags: ["Brands"],
    }),
    createBrands: build.mutation({
      query: (body) => ({
        url: "/brands",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Brands"],
    }),
    getBrandsById: build.query({
      query: (id) => ({
        url: `/brands/${id}`,
      }),
      providesTags: ["Brands"],
    }),
    deleteBrands: build.mutation({
      query: (id) => ({
        url: `/brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Brands"],
    }),
    updateBrands: build.mutation({
      query: ({ id, body }) => ({
        url: `/brands/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Brands"],
    }),
  }),
});

export const {
    useGetBrandsQuery,
    useCreateBrandsMutation,
    useDeleteBrandsMutation,
    useGetBrandsByIdQuery,
    useUpdateBrandsMutation
} = brandApi;