import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, REDUCER_PATH } from "../../constants";
import { RootState } from "../../store";

export const apiSlice = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      const { lng } = (getState() as RootState).language;
      if (!!token) {
        headers.set("Authorization", `Token ${token}`);
      }
      if (!!lng) {
        headers.set("Accept-Language", lng);
      }
      return headers;
    },
  }),
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
        method: "PATCH",
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
    createImage: builder.mutation({
      query: (body) => ({
        url: `build_image/`,
        method: "POST",
        body,
        formData: true,
      }),
    }),
    deleteBuildImage: builder.mutation({
      query: (id) => ({
        url: `build_image/${id}/`,
        method: "DELETE",
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
    register: builder.mutation({
      query: (body) => ({
        url: `auth/register/`,
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `auth/login/`,
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `auth/logout/`,
        method: "POST",
      }),
    }),
    deactivate: builder.mutation({
      query: () => ({
        url: `auth/deactivate/`,
        method: "DELETE",
      }),
    }),
    userProfile: builder.query({
      query: (id) => `auth/user/${id}/`,
    }),
  }),
});

export const {
  login,
  register,
  logout,
  deactivate,
  createBuild,
  updateBuild,
  deleteBuild,
  deleteBuildImage,
} = apiSlice.endpoints;

export const {
  useGetBuildsQuery,
  useCreateBuildMutation,
  useGetBuildQuery,
  useUpdateBuildMutation,
  useDeleteBuildMutation,
  useCreateCommentMutation,
  useCreateImageMutation,
  useDeleteBuildImageMutation,
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
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useDeactivateMutation,
  useUserProfileQuery,
} = apiSlice;
