import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useAppDispatch } from "../../Redux/hooks";
import LineChart from "./Graph/LineChart.jsx";
import { productivityTrend } from "../../Redux/Features/ActivitySummary/activitySummary.action";
import styled from "styled-components";

const ActivitySummaryContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 15px;
  padding-right: 30px;
  border-radius: 20px;
  font-size: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 50px;
`;
const Header = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding-left: 20px;
`;

interface Props {
  params: {
    type: number;
    teamId?: number;
    isSpeciality?: boolean;
    periodType?: number;
    clinicId?: number;
    userId?: number;
  };
}

const TrendLineViewer: React.FC<Props> = ({ params }) => {
  const [trendTitle, setTrendTitle] = useState<string>("");
  const [lineData, setLineData] = useState<chartData[]>([]);
  const dispatch = useAppDispatch();
  const activitySummaryResponse = useSelector(
    (state: RootState) => state.activitySummary
  );

  interface FlatArray {
    count: number;
    period: string;
    periodType: number;
    date: string;
  }
  interface MonthlyData {
    count: number;
    month: string;
  }
  interface chartDataObject {
    x: string;
    y: number;
  }
  interface chartData {
    id: string;
    color: string;
    data: chartDataObject[];
  }
  interface ResponseState {
    activitySummaryDataList: FlatArray[];
    clinicId: number;
    clinicName: string;
  }

  useEffect(() => {
    dispatch(productivityTrend(params));
  }, []);

  React.useEffect(() => {
    const data = activitySummaryResponse.productivityTrend;
    if (data && Array.isArray(data)) {
      let flatArray = data
        .map((item: ResponseState) => item.activitySummaryDataList)
        .flat();
      let totalJan: MonthlyData;
      let totalFeb: MonthlyData;
      let totalMar: MonthlyData;
      let totalApr: MonthlyData;
      let totalMay: MonthlyData;
      let totalJun: MonthlyData;
      let totalJul: MonthlyData;
      let totalAug: MonthlyData;
      let totalSep: MonthlyData;
      let totalOct: MonthlyData;
      let totalNov: MonthlyData;
      let totalDec: MonthlyData;
      const getTotal = (month: string): MonthlyData => {
        let newArray = flatArray
          .filter((item: FlatArray) => (item.period === month ? item : null))
          .map((item) =>
            item
              ? {
                  count: item.count,
                  date: item.date,
                  period: item.period,
                  periodType: item.periodType,
                }
              : null
          );
        let totalCount = newArray
          .map((item) => item?.count ?? 0)
          .reduce((total, current) => total + current, 0);
        if (newArray.length) {
          return {
            count: totalCount,
            month: month,
          };
        } else {
          return {
            count: 0,
            month: "",
          };
        }
      };
      totalJan = getTotal("January");
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
      let chartArray: chartData[] = data.map((item) => {
        let random = Math.floor(Math.random() * (299 - 100 + 1) + 100);
        let chartObj = {
          id: item.clinicName
            ? item.clinicName
            : item.userName
            ? item.userName
            : item.speciality,
          color: `hsl(${random},70%,50%)`,
          data: item.activitySummaryDataList.map((el: FlatArray) => {
            return { x: el.period, y: el.count };
          }),
        };
        return chartObj;
      });
      setLineData(chartArray);
    }
  }, [activitySummaryResponse]);

  useEffect(() => {
    if (!params) {
      return;
    }

    const trendType = params.type === 1 ? "Clinic" : "Coder";
    const trendTitles: Record<number, string> = {
      1: "12 Month Trend",
      2: "Weekly Trend",
      3: "Daily Trend",
    };

    const title = params.isSpeciality
      ? `${trendTitles[params.periodType!]} - By Speciality`
      : `${trendTitles[params.periodType!]} - By ${trendType}`;

    setTrendTitle(title || "");
  }, [params]);

  return (
    <ActivitySummaryContainer>
      <Header>{trendTitle}</Header>
      <LineChart chartData={lineData} />
    </ActivitySummaryContainer>
  );
};

export default TrendLineViewer;
