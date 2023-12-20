interface ActivitySummaryData {
  date?: string;
  period?: string;
  periodType?: number;
}
export interface ClinicData {
  clinicId?: number;
  clinicName?: string;
  activitySummaryDataList?: ActivitySummaryData[];
  percentage?:number,
  count?:number
}
interface ProductivityTrendResponse {
  responseCode?: number;
  responseType?: number;
  data?: ClinicData[] | null;
  error?: null | string;
  accessToken?: null | string;
}
export interface ProductivityMixResponse{
  responseCode?: number;
  responseType?: number;
  data?: ClinicData[];
  error?: null | string;
  accessToken?: null | string;
}
interface ProductivityTrendState {
  productivityTrend?: ProductivityTrendResponse | null;
  productivityMix?:ProductivityMixResponse | null;
}
 
export {ProductivityTrendState}