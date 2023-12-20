import httpCommon from "../../http-common";

export interface Data{
  clinicId?:number|string,
  isSpeciality?:boolean,
  periodType?:number,
  teamId?:number,
  type?:number
  reportType?:number,
  userId?:number
}

class ProductivityTrendService {
  productivityTrend(data:Data){
    return httpCommon.get(`/trillium-common-service/v1/common/report/internal/productivity/trend?clinicId=${data.clinicId}&isSpeciality=${data.isSpeciality}&userId=${data.userId}&periodType=${data.periodType}&teamId=${data.teamId}&type=${data.type}`)
  }
  productivityMix(data:Data){
    return httpCommon.get(`/trillium-common-service/v1/common/report/internal/productivity/mix?clinicId=${data.clinicId}&userId=${data.userId}&periodType=${data.periodType}&reportType=${data.reportType}&teamId=${data.teamId}&type=${data.type}`)
  }
}
export default new ProductivityTrendService();