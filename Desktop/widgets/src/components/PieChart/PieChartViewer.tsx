import React, { useEffect, useState } from "react";
import PieChart from "./Graph/PieChart.jsx";
import styled from "styled-components";
import DataTable from "./Table/DataTable.js";
import { useAppDispatch } from "../../Redux/hooks.js";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store.js";
import { productivityMix } from "../../Redux/Features/ActivitySummary/activitySummary.action";

const PieChartContainer = styled.div`
  height: 400px;
  min-width: 850px;
  /* width: 850px; */
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 50px;
`;
const GraphContainer = styled.div`
  width: 50%;
`;
const TableContainer = styled.div`
  width: 50%;
  padding: 20px;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
`;
const Header = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  /* border: 1px solid red; */
`;

interface Props {
  params: {
    type: number;
    teamId: number;
    periodType: number;
    clinicId: number;
    reportType: number;
    userId: number;
  };
}

const PieChartViewer: React.FC<Props> = ({ params }) => {
  interface Data {
    key: number;
    count: number;
    percentage: number | string;
    name: string;
  }
  const [data, setData] = useState<Data[]>([]);
  const [mixTitle, setMixTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const activitySummaryResponse = useSelector(
    (state: RootState) => state.activitySummary.productivityMix
  );

  useEffect(() => {
    let title: string;
    if (params) {
      if (params.reportType === 1) {
        if (params.type === 1) {
          title = "12 Month Mix By Clinic";
        } else {
          title = "12 Month Mix By Coder";
        }
      } else if (params.reportType === 2) {
        title = "12 Month Mix By Speciality";
      } else if (params.reportType === 3) {
        title = "12 Month Mix By Status";
      } else if (params.reportType === 4) {
        title = "12 Month Mix By Speciality";
      } else {
        console.log(params.reportType);
        title = "";
      }
      console.log(title);
      setMixTitle(title);
    }
  }, [params]);

  useEffect(() => {
    const data = activitySummaryResponse;
    if (data && Array.isArray(data)) {
      const arr = data
        .map((item, index) => {
          return {
            key: index,
            count: item.count,
            percentage: item.percentage.toFixed() + "%",
            name: item.name,
          };
        })
        .filter((item) => item.count > 0);
      setData(arr);
    }
  }, [activitySummaryResponse]);

  useEffect(() => {
    dispatch(productivityMix(params));
  }, []);

  return (
    <>
      <PieChartContainer>
        <GraphContainer>
          <Header>{mixTitle}</Header>
          <PieChart data={data} />
        </GraphContainer>
        <TableContainer>
          <DataTable data={data} reportType={params.reportType} />
        </TableContainer>
      </PieChartContainer>
    </>
  );
};

export default PieChartViewer;
