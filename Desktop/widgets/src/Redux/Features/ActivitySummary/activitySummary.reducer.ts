import {  createSlice } from "@reduxjs/toolkit";
import { productivityTrend } from "./activitySummary.action";
import { ProductivityTrendState } from "./activitySummary.interfaces";

const initialState: ProductivityTrendState = {};

const activitySummarySlice = createSlice({
  name: "activitySummary",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(productivityTrend.fulfilled, (state, action) => {
        // console.log(action.payload)
      if (action.payload.responseCode === 0) {
        state.response = action.payload.data
      }
    });
  },
});

const { reducer } = activitySummarySlice;
export default reducer;
