import React from "react";
import PieChartViewer from "./PieChartViewer";
import { Provider } from "react-redux";
import store from "../../Redux/Store/store";

interface Props {
  params: {
    type: number;
    teamId: number;
    periodType: number;
    userId: number;
    clinicId: number;
    reportType: number;
  };
}

const PieChartWrapper: React.FC<Props> = ({ params }) => {
  return (
    <Provider store={store}>
      <PieChartViewer params={params} />
    </Provider>
  );
};

export default PieChartWrapper;
