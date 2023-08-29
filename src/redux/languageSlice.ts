import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export interface LanguageInterface {
  lng: string;
}

const initialState: LanguageInterface = {
  lng: Cookies.get("language") || "es",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.lng = payload;
      Cookies.set("language", state.lng);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState) => state.language.lng;

export default languageSlice;
