interface ActivitySummaryData {
  date: string;
  period: string;
  periodType: number;
}
interface ClinicData {
  clinicId: number;
  clinicName: string;
  activitySummaryDataList: ActivitySummaryData[];
}
interface ProductivityResponse {
  responseCode: number;
  responseType: number;
  data: ClinicData[] | null;
  error: null | string;
  accessToken: null | string;
}
interface ProductivityTrendState {
  response?: ProductivityResponse | null;
}
 
export {ProductivityTrendState}