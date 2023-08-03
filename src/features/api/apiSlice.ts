import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getBuilds: builder.query({
      query: () => `build/`,
    }),
    createBuild: builder.mutation({
      query: (body) => ({
        url: `build/`,
        method: "POST",
        body,
      }),
    }),
    getBuild: builder.query({
      query: (id) => `build/${id}/`,
    }),
    updateBuild: builder.mutation({
      query: ({ id, body }) => ({
        url: `build/${id}/`,
        method: "PUT",
        body,
      }),
    }),
    deleteBuild: builder.mutation({
      query: (id) => ({
        url: `build/${id}/`,
        method: "DELETE",
      }),
    }),
    createComment: builder.mutation({
      query: (body) => ({
        url: `comment/`,
        method: "POST",
        body,
      }),
    }),
    getCPUs: builder.query({
      query: () => `cpu/`,
    }),
    getMotherboards: builder.query({
      query: () => `motherboard/`,
    }),
    getRAMS: builder.query({
      query: () => `ram/`,
    }),
    getGPUs: builder.query({
      query: () => `gpu/`,
    }),
    getAirCoolers: builder.query({
      query: () => `air_cooler/`,
    }),
    getLiquidCoolers: builder.query({
      query: () => `liquid_cooler/`,
    }),
    getHDDs: builder.query({
      query: () => `hdd/`,
    }),
    getSSDs: builder.query({
      query: () => `ssd/`,
    }),
    getPSUs: builder.query({
      query: () => `psu/`,
    }),
    getCases: builder.query({
      query: () => `case/`,
    }),
  }),
});

export const {
  useGetBuildsQuery,
  useCreateBuildMutation,
  useGetBuildQuery,
  useUpdateBuildMutation,
  useDeleteBuildMutation,
  useCreateCommentMutation,
  useGetCPUsQuery,
  useGetMotherboardsQuery,
  useGetRAMSQuery,
  useGetGPUsQuery,
  useGetAirCoolersQuery,
  useGetLiquidCoolersQuery,
  useGetHDDsQuery,
  useGetSSDsQuery,
  useGetPSUsQuery,
  useGetCasesQuery,
} = apiSlice;
