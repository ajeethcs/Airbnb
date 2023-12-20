import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductivityTrendService, { Data } from './activitySummary.service'

export const productivityTrend = createAsyncThunk(
  "activitySummary/productivityTrend",
  async (payload:Data) => {
    const res = await ProductivityTrendService.productivityTrend(payload);
    return res.data;
  }
);

export const productivityMix = createAsyncThunk(
  "activitySummary/productivityMix",
  async (payload:Data) => {
    const res = await ProductivityTrendService.productivityMix(payload);
    return res.data;
  }
);
