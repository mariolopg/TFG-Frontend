import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
      getBuilds: builder.query({
        query: () => `build/`
      }),
      createBuild: builder.mutation({
        query: (body) => ({
          url: `build/`,
          method: 'POST',
          body
        })
      }),
      getCPUs: builder.query({
        query: () => `cpu/`
      }),
      getMotherboards: builder.query({
        query: () => `motherboard/`
      }),
      getRAMS: builder.query({
        query: () => `ram/`
      }),
      getGPUs: builder.query({
        query: () => `gpu/`
      }),
      getAirCoolers: builder.query({
        query: () => `air_cooler/`
      }),
      getLiquidCoolers: builder.query({
        query: () => `liquid_cooler/`
      }),
      getHDDs: builder.query({
        query: () => `hdd/`
      }),
      getSSDs: builder.query({
        query: () => `ssd/`
      }),
      getPSUs: builder.query({
        query: () => `psu/`
      }),
      getCases: builder.query({
        query: () => `case/`
      }),
    }),
  });
  
  export const { useGetBuildsQuery, useCreateBuildMutation, useGetCPUsQuery, useGetMotherboardsQuery, useGetRAMSQuery, useGetGPUsQuery, useGetAirCoolersQuery, useGetLiquidCoolersQuery, useGetHDDsQuery, useGetSSDsQuery, useGetPSUsQuery, useGetCasesQuery } = apiSlice;