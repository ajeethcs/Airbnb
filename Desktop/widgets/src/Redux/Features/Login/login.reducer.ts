import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createLogin, createLogout } from "./login.action";

interface LoginState { loading: number; count: number; accessToken?: string; loginResponse?: any; error?: any; }
const initialState: LoginState = { loading: 0, count: 0, };

const loginSlice = createSlice({
  name: "login",
  initialState: { loading: 0, count: 0 },
  reducers: {
    setCount: (state) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createLogin.fulfilled, (state:LoginState, action:PayloadAction<any>) => {
      state.loading = 0;
      if (action.payload.statusCode === 200) {
        state.accessToken = action.payload.accessToken;
        state.loginResponse = action.payload.data;
        localStorage.setItem("accessToken", state.accessToken!);
        window.location.href = "/users";
      } else if (action.payload.statusCode === 401) {
        state.error = action.payload.data;
      }
    });
    builder.addCase(createLogin.pending, (state:LoginState) => {
      state.loading = 1;
    });
    builder.addCase(createLogin.rejected, (state:LoginState, action) => {
      state.loading = 0;
      state.error = action.error.message;
    });

    builder.addCase(createLogout.fulfilled, (state:LoginState, action) => {
      if (action.payload.statusCode === 200) {
        state.loading = 0;
        localStorage.clear();
        window.location.href = "/login";
      }
    });
  },
});

export const { setCount } = loginSlice.actions;
const { reducer } = loginSlice;
export default reducer;
