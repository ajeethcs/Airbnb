import {  createSlice } from "@reduxjs/toolkit";
import { productivityMix, productivityTrend } from "./activitySummary.action";
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
      if (action.payload.responseCode === 0) {
        state.productivityTrend = action.payload.data
      }
    });
    builder.addCase(productivityMix.fulfilled, (state, action) => {
      if (action.payload.responseCode === 0) {
        state.productivityMix = action.payload.data
      }
    });
  },
});

const { reducer } = activitySummarySlice;
export default reducer;
