import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import type { UserInterface } from "../domain/types";
import { login, logout } from "../domain/api/apiSlice";
import { RootState } from "../store";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

export const checkSession = createAsyncThunk(
  "checkSession",
  async (
    session: { token: string; user: UserInterface },
    { dispatch, getState }
  ) => {
    const { token } = (getState() as RootState).auth;
    if (token !== session.token) {
      dispatch(
        setSession({
          token: session.token,
          user: session.user as UserInterface,
        })
      );
      dispatch(setStatus(QueryStatus.fulfilled));
    }
  }
);

interface AuthState {
  status: QueryStatus;
  token: string;
  user?: UserInterface | null;
}

const initialState: AuthState = {
  status: QueryStatus.uninitialized,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (
      state,
      { payload }: PayloadAction<{ token: string; user: UserInterface }>
    ) => {
      state.token = payload.token;
      state.user = payload.user;
    },
    setStatus: (state, { payload }: PayloadAction<QueryStatus>) => {
      state.status = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      login.matchFulfilled,
      (state, { payload: { token, user } }) => {
        state.token = token;
        state.user = user;
        Cookies.set(
          "session",
          JSON.stringify({
            token: token,
            user: user,
          })
        );
        state.status = QueryStatus.fulfilled;
      }
    );
    builder.addMatcher(login.matchPending, (state) => {
      state.status = QueryStatus.pending;
    });
    builder.addMatcher(login.matchRejected, (state) => {
      state.status = QueryStatus.rejected;
    });
    builder.addMatcher(logout.matchFulfilled, (state) => {
      Cookies.set("session", "");
      state = initialState;
    });
  },
});

export const { setSession, setStatus } = authSlice.actions;

export const selectSessionStatus = (state: RootState) => state.auth.status;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsLogged = (state: RootState) => !!state.auth.token;
export const selectUserId = (state: RootState) =>
  state.auth.user ? state.auth.user.pk : "";
export const selectUserUsername = (state: RootState) =>
  state.auth.user ? state.auth.user.username : "";

export default authSlice;
