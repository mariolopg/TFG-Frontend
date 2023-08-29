import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  login,
  logout,
  register,
  deactivate,
  createBuild,
  updateBuild,
  deleteBuild,
  deleteBuildImage,
} from "../domain/api/apiSlice";
import { LoginErrorsInterface, RegisterErrorsInterface } from "../domain/types";

export interface ToastInterface {
  isOpen: boolean;
  message: string;
  color?: string;
}

const initialState: ToastInterface = {
  isOpen: false,
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastIsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload;
    },
    setToast: (state, { payload }: PayloadAction<ToastInterface>) => {
      state.isOpen = payload.isOpen;
      state.message = payload.message;
      state.color = payload.color;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state) => {
      if (!state.isOpen) {
        state.isOpen = true;
        state.message = "login";
        state.color = "success";
      }
    });
    builder.addMatcher(login.matchRejected, (state, { payload }) => {
      if (payload && "data" in payload) {
        const errors = payload.data as LoginErrorsInterface;
        if ("non_field_errors" in errors) {
          state.isOpen = true;
          state.message = errors.non_field_errors.join(" ");
          state.color = "danger";
        }
      }
    });
    builder.addMatcher(register.matchFulfilled, (state) => {
      if (!state.isOpen) {
        state.isOpen = true;
        state.message = "register";
        state.color = "success";
      }
    });
    builder.addMatcher(register.matchRejected, (state, { payload }) => {
      if (payload && "data" in payload) {
        const errors = payload.data as RegisterErrorsInterface;
        if ("non_field_errors" in errors) {
          state.isOpen = true;
          state.message = errors.non_field_errors.join(" ");
          state.color = "danger";
        }
      }
    });
    builder.addMatcher(logout.matchFulfilled, (state) => {
      state.isOpen = true;
      state.message = "logout";
      state.color = "success";
    });
    builder.addMatcher(deactivate.matchFulfilled, (state) => {
      state.isOpen = true;
      state.message = "accountDelete";
      state.color = "success";
    });
    builder.addMatcher(createBuild.matchFulfilled, (state) => {
      state.isOpen = true;
      state.message = "buildCreate";
      state.color = "success";
    });
    builder.addMatcher(updateBuild.matchFulfilled, (state) => {
      state.isOpen = true;
      state.message = "buildUpdate";
      state.color = "success";
    });
    builder.addMatcher(deleteBuild.matchFulfilled, (state) => {
      state.isOpen = true;
      state.message = "buildDelete";
      state.color = "success";
    });
    builder.addMatcher(deleteBuildImage.matchFulfilled, (state) => {
      state.isOpen = true;
      state.message = "imageDelete";
      state.color = "success";
    });
  },
});

export const { setToastIsOpen, setToast } = toastSlice.actions;
export const selectToastIsOpen = (state: RootState) => state.toast.isOpen;
export const selectToast = (state: RootState) => state.toast;

export default toastSlice;
