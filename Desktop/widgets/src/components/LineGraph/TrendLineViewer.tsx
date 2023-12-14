import React, { useEffect, useState } from 'react';
import  './style.css';
import { useSelector } from "react-redux";
import { RootState } from '../../Redux/Store/store';
import { useAppDispatch } from '../../Redux/hooks';
import LineChart from './Graph/LineChart.jsx';
import { dummyData } from './demoData';
import { productivityTrend } from '../../Redux/Features/ActivitySummary/activitySummary.action';


const Button:React.FC = () => {
  // const [fullMonths, setFullMonths] = useState<string[]>([])
  const [lineData, setLineData] = useState<chartData[]>([])

  const dispatch = useAppDispatch()
  const  activitySummaryResponse  = useSelector((state:RootState) => state.activitySummary);
 
 

  useEffect(() => {
    const params={
      clinicId:0,
      isSpeciality:false,
      periodType:2,
      teamId:2,
      type:1
    }
    dispatch(productivityTrend(params))
  }, [])


  interface FlatArray{
    count:number,
    period:string,
    periodType:number
    date:string,
  }
  interface MonthlyData{
    count:number,
    month:string
  }
  interface chartDataObject{
    x:string
    y:number,
  }
  interface chartData{
    id:string,
    color:string,
    data:chartDataObject[]
  }
  interface ResponseState{
    activitySummaryDataList:FlatArray[],
    clinicId:number,
    clinicName:string
  }
  

  React.useEffect(() => {
    // const data = activitySummaryResponse.response
    const data = dummyData.data
     if(data&&Array.isArray(data)){
    // setFullMonths(data[0].activitySummaryDataList.map((item:FlatArray)=>item.period))
    let flatArray = data.map((item:ResponseState) => item.activitySummaryDataList).flat();
        let totalJan:MonthlyData;
        let totalFeb:MonthlyData;
        let totalMar:MonthlyData;
        let totalApr:MonthlyData;
        let totalMay:MonthlyData;
        let totalJun:MonthlyData;
        let totalJul:MonthlyData;
        let totalAug:MonthlyData;
        let totalSep:MonthlyData;
        let totalOct:MonthlyData;
        let totalNov:MonthlyData;
        let totalDec:MonthlyData;
        const getTotal = (month:string):MonthlyData => {
          let newArray = flatArray
            .filter((item:FlatArray) => (item.period === month ? item : null))
            .map((item) =>
              item
                ? {
                    count:item.count,
                    date:item.date,
                    period:item.period,
                    periodType:item.periodType,
                  }
                : null
            );
              let totalCount = newArray
              .map((item) =>item?.count??0)
              .reduce((total, current) => total + current, 0);
          if (newArray.length) {
            return {
              count: totalCount,
              month: month,
              // year: newArray[0].year,
            };
          } else {
            return {
              count:0,
              month:''
            }
          }
        };
        totalJan= getTotal("January");
        totalFeb = getTotal("February");
        totalMar = getTotal("March");
        totalApr = getTotal("April");
        totalMay = getTotal("May");
        totalJun = getTotal("June");
        totalJul = getTotal("July");
        totalAug = getTotal("August");
        totalSep = getTotal("September");
        totalOct = getTotal("October");
        totalNov = getTotal("November");
        totalDec = getTotal("December");
         let totalsArray = [
          totalJan ? totalJan : null,
          totalFeb ? totalFeb : null,
          totalMar ? totalMar : null,
          totalApr ? totalApr : null,
          totalMay ? totalMay : null,
          totalJun ? totalJun : null,
          totalJul ? totalJul : null,
          totalAug ? totalAug : null,
          totalSep ? totalSep : null,
          totalOct ? totalOct : null,
          totalNov ? totalNov : null,
          totalDec ? totalDec : null,
        ];
        let chartArray:chartData[] = data.map((item)=>{
          let random = Math.floor(Math.random()*(299-100+1)+100)
          let chartObj = {
            id:item.clinicName,
            color:`hsl(${random},70%,50%)`,
            data:item.activitySummaryDataList.map((el:FlatArray)=>{
              return {x:el.period,y:el.count}
            })
          }
          return chartObj
        })
        // console.log(chartArray)
        setLineData(chartArray)
        console.log(chartArray)
      }
  }, [activitySummaryResponse])



  
  
  return (
    // <Provider store={store}>
    <div className='container'>
      <div className="header">
        12 Month Trend - By Clinic
      </div>
      <div className="graph_body">
        <LineChart period={1} halfChartData={lineData} chartData={lineData}/>
      </div>
    </div>
  )
}

export default Button