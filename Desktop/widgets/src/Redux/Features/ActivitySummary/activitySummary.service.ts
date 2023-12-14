import httpCommon from "../../http-common";
// import httpAuth from "../../http-auth";

export interface Data{
    clinicId:number|string,
      isSpeciality:boolean,
      periodType:number,
      teamId:number,
      type:number
}

class ProductivityTrendService {
  productivityTrend(data:Data){
    return httpCommon.get(`/trillium-common-service/v1/common/report/internal/productivity/trend?clinicId=${data.clinicId}&isSpeciality=${data.isSpeciality}&periodType=${data.periodType}&teamId=${data.teamId}&type=${data.type}`)
  }
}

export default new ProductivityTrendService();