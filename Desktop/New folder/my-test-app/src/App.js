import "./App.css";
import {
  TrendLineViewerByClinic,
  TrendLineViewerByCoder,
  PieChartViewer,
} from "trillium-widgets";

function App() {
  const pie = {
    type: 1,
    teamId: 2,
    periodType: 3,
    clinicId: 0,
    reportType: 3,
    userId: 0,
  };
  const line = {
    type: 1,
    teamId: 2,
    isSpeciality: false,
    periodType: 2,
    clinicId: 0,
    userId: 0,
  };

  return (
    <div className="App">
      <div className="container">
        <div className="line">
          <div style={{ width: "900px" }}>
            <TrendLineViewerByClinic params={line} />
          </div>
          <div style={{ width: "900px" }}>
            {/* <TrendLineViewerByCoder params={specialityLine} /> */}
            <PieChartViewer params={pie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
