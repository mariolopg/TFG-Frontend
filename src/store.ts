import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./domain/api/apiSlice";
import authSlice from "./redux/authSlice";
import toastSlice from "./redux/toastSlice";
import languageSlice from "./redux/languageSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [toastSlice.name]: toastSlice.reducer,
    [languageSlice.name]: languageSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
