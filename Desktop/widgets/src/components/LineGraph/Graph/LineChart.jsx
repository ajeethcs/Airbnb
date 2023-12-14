import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./Line.css";

function LineChart(props) {
  console.log(props);
  function numFormatter(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  return (
    <div className="chart_container">
      <ResponsiveLine
        data={
          props.halfChartData
          // props.period === 1
          //   ? props.halfChartData
          //   : props.period === 2
          //   ? props.chartData
          //   : ""
        }
        margin={{
          top: 30,
          right: 160,
          bottom: 70,
          left: 50,
        }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          //   stacked: true,
          min: "auto",
          max: "auto",
        }}
        minY="auto"
        maxY="auto"
        stacked={true}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "count",
          // legendOffset: -40,
          // legendPosition: "middle"
          format: (value) => `$${numFormatter(value)}`,
        }}
        enableGridX={false}
        yFormat={(value) =>
          `$${Number(value).toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}`
        }
        pointSize={5.5}
        lineWidth={2.5}
        // dotSize={10}
        // dotColor="inherit:darker(0.3)"
        // dotBorderWidth={1}
        // dotBorderColor="#ffffff"
        // enableDotLabel={true}
        // dotLabel="y"
        // dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableSlices="x"
        legends={[
          {
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 160,
            translateY: 0,
            itemsSpacing: 5,
            itemDirection: "left-to-right",
            itemWidth: 120,
            itemHeight: 15,
            itemOpacity: 1,
            symbolSize: 8,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "white",
                padding: "12px",
                border: "1px solid #ccc",
              }}
            >
              {/* <div>x: {slice.id}</div> */}
              {slice.points
                .sort((a, b) => b.data.y - a.data.y)
                .map((point) => (
                  <div className="tooltip_container" key={point.id}>
                    <div
                      style={{
                        background: point.serieColor,
                        height: "10px",
                        width: "10px",
                        // padding: "0 3px 0 0",
                      }}
                    ></div>
                    <div className="tooltip_name">{point.serieId}</div>
                    <div>
                      <strong>{point.data.yFormatted}</strong>
                    </div>
                  </div>
                ))}
            </div>
          );
        }}
      />
    </div>
  );
}

export default LineChart;
