import React from "react";
import { Provider } from "react-redux";
import store from "../../Redux/Store/store";
import TrendLineViewerByClinic from "./TrendLineViewer";
// import TrendLineViewerByCoder from "./TrendLineViewerByCoder";

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

const TrendLineWrapper: React.FC<Props> = ({ params }) => {
  return (
    <Provider store={store}>
      <TrendLineViewerByClinic params={params} />
    </Provider>
  );
};
// const TrendLineWrapperByCoder: React.FC<Props> = ({ params }) => {
//   return (
//     <Provider store={store}>
//       <TrendLineViewerByCoder params={params} />
//     </Provider>
//   );
// };

export { TrendLineWrapper };
