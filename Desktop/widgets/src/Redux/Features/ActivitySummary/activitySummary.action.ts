import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductivityTrendService, { Data } from './activitySummary.service'

export const productivityTrend = createAsyncThunk(
  "activitySummary/productivityTrend",
  async (payload:Data) => {
    const res = await ProductivityTrendService.productivityTrend(payload);
    return res.data;
  }
);
